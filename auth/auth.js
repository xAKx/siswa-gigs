(() => {
  const form = document.querySelector('form[data-demo]');
  const submit = form.querySelector('button[type="submit"]');
  const toast = document.getElementById('toast');
  const uitmEmail = /^[^@]+@(?:[a-z0-9-]+\.)*uitm\.edu\.my$/i;
  let toastTimer;

  function showStatus(message) {
    toast.textContent = message;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 3200);
  }

  document.querySelectorAll('[data-pw]').forEach(button => {
    const field = document.getElementById(button.dataset.pw);
    const label = button.getAttribute('aria-label');

    button.addEventListener('click', () => {
      const show = field.type === 'password';
      field.type = show ? 'text' : 'password';
      button.textContent = show ? 'Hide' : 'Show';
      button.setAttribute('aria-label', show ? label.replace('Show', 'Hide') : label);
      button.setAttribute('aria-pressed', String(show));
    });
  });

  function validate() {
    const email = form.elements.email;
    const fullName = form.elements.full_name;
    const confirmation = form.elements.confirm;
    email.setCustomValidity(uitmEmail.test(email.value) ? '' : 'Enter a valid UiTM email address.');
    fullName?.setCustomValidity(fullName.value.trim() ? '' : 'Enter your full name.');
    confirmation?.setCustomValidity(confirmation.value === form.elements.password.value ? '' : 'Re-enter the same password.');

    let firstInvalid;
    form.querySelectorAll('.f input, .f select').forEach(field => {
      const invalid = !field.checkValidity();
      field.closest('.f').classList.toggle('bad', invalid);
      field.setAttribute('aria-invalid', String(invalid));
      if (invalid) firstInvalid ??= field;
    });

    firstInvalid?.focus();
    return !firstInvalid;
  }

  function updateProfile() {
    const name = form.elements.full_name.value.trim();
    const [firstName] = name.split(/\s+/);
    const initial = Array.from(firstName)[0].toUpperCase();
    document.getElementById('profile-name').textContent = name;
    document.querySelector('.profile-summary .avatar').textContent = initial;
    document.querySelector('.profile-avatar').textContent = initial;
    document.querySelector('.profile-name span').textContent = firstName;

    const phone = form.elements.phone_number.value.trim();
    const email = form.elements.email.value;
    document.getElementById('profile-contact').textContent = phone ? email + ' · ' + phone : email;

    const skills = document.getElementById('profile-skills');
    skills.replaceChildren();
    form.elements.skills.value.split(',').map(skill => skill.trim()).filter(Boolean).forEach(skill => {
      const chip = document.createElement('span');
      chip.className = 'chip';
      chip.textContent = skill;
      skills.append(chip, ' ');
    });
    if (!skills.childElementCount) skills.textContent = 'No skills listed.';
  }

  // These forms demonstrate the flow without saving credentials or creating sessions.
  form.noValidate = true;
  form.addEventListener('submit', event => {
    event.preventDefault();
    if (submit.disabled) return;

    if (!validate()) {
      showStatus('Please fix the highlighted fields.');
      return;
    }

    if (form.id === 'profile-form') updateProfile();
    showStatus(form.dataset.demo);
    if (form.dataset.next) {
      submit.disabled = true;
      setTimeout(() => location.assign(form.dataset.next), 900);
    }
  });
  submit.disabled = false;
  window.addEventListener('pageshow', event => {
    if (event.persisted) submit.disabled = false;
  });

  const menuToggle = document.querySelector('.menu-toggle');
  if (menuToggle) {
    const panel = document.getElementById('menu-panel');
    const profileLink = document.querySelector('.profile-link');
    const accountNav = document.getElementById('account-nav');
    const mobile = window.matchMedia('(max-width:1024px), (max-width:1366px) and (pointer:coarse)');

    function setMenu(open) {
      menuToggle.setAttribute('aria-expanded', String(open));
      panel.inert = mobile.matches && !open;
    }

    function updateHeader() {
      if (mobile.matches) menuToggle.before(profileLink);
      else accountNav.prepend(profileLink);
      setMenu(false);
    }

    menuToggle.hidden = false;
    updateHeader();
    mobile.addEventListener('change', updateHeader);
    menuToggle.addEventListener('click', () => setMenu(menuToggle.getAttribute('aria-expanded') === 'false'));
    menuToggle.closest('header').addEventListener('keydown', event => {
      if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
        setMenu(false);
        menuToggle.focus();
      }
    });
  }
})();
