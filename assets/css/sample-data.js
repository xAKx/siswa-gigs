// Edit the sample data here. Use the same IDs for records that go together.
const demoData = {
  USER: [
    {"user_id": 1, "full_name": "Akmal Hakim bin Razak", "email": "akmal@student.uitm.edu.my", "password": "[demo only]", "phone_number": "010-000-0001", "role": "student"},
    {"user_id": 2, "full_name": "Aisyah binti Rahman", "email": "aisyah@student.uitm.edu.my", "password": "[demo only]", "phone_number": "010-000-0002", "role": "employer"},
    {"user_id": 3, "full_name": "Farhan Idris", "email": "farhan@student.uitm.edu.my", "password": "[demo only]", "phone_number": "010-000-0003", "role": "employer"},
    {"user_id": 4, "full_name": "Nadia Sofea", "email": "nadia@student.uitm.edu.my", "password": "[demo only]", "phone_number": "010-000-0004", "role": "employer"},
    {"user_id": 5, "full_name": "Siti Nur Hidayah", "email": "sitinur@student.uitm.edu.my", "password": "[demo only]", "phone_number": "010-000-0005", "role": "student"},
    {"user_id": 6, "full_name": "Muhammad Danial", "email": "danial@student.uitm.edu.my", "password": "[demo only]", "phone_number": "010-000-0006", "role": "student"},
    {"user_id": 7, "full_name": "Admin", "email": "admin@student.uitm.edu.my", "password": "[demo only]", "phone_number": "010-000-0007", "role": "admin"}
  ],
  SKILL: [
    {"skill_id": 1, "skill_name": "Poster design", "skill_description": "Design posters for campus events"},
    {"skill_id": 2, "skill_name": "Canva", "skill_description": "Prepare layouts in Canva"},
    {"skill_id": 3, "skill_name": "Presentation", "skill_description": "Create presentation slides"},
    {"skill_id": 4, "skill_name": "Video editing", "skill_description": "Edit event footage"}
  ],
  STUDENT_SKILL: [
    {"student_skill_id": 1, "user_id": 1, "skill_id": 1, "skill_level": "Advanced"},
    {"student_skill_id": 2, "user_id": 1, "skill_id": 2, "skill_level": "Intermediate"},
    {"student_skill_id": 3, "user_id": 1, "skill_id": 3, "skill_level": "Intermediate"}
  ],
  EMPLOYER: [
    {"employer_id": 1, "user_id": 2, "company_name": "UiTM Club", "company_description": "Campus events", "company_address": "UiTM Shah Alam", "contact_number": "010-000-0002"},
    {"employer_id": 2, "user_id": 3, "company_name": "Presentation Society", "company_description": "Student presentations", "company_address": "UiTM Shah Alam", "contact_number": "010-000-0003"},
    {"employer_id": 3, "user_id": 4, "company_name": "Campus Media Club", "company_description": "Campus video production", "company_address": "UiTM Shah Alam", "contact_number": "010-000-0004"},
    {"employer_id": 4, "user_id": 1, "company_name": "Student Research Group", "company_description": "Student research projects", "company_address": "UiTM Shah Alam", "contact_number": "010-000-0001"}
  ],
  JOB: [
    {"job_id": 1, "employer_id": 1, "job_title": "Design Event Poster for UiTM Club", "job_description": "Design an A3 poster for the upcoming club event.", "job_location": "UiTM Shah Alam", "job_type": "Design", "hourly_rate": 15, "required_hours": 4, "job_status": "Open", "date_posted": "2026-01-10", "application_deadline": "2026-01-22"},
    {"job_id": 2, "employer_id": 2, "job_title": "Create Slide Presentation (10-15 slides)", "job_description": "Prepare 10 to 15 presentation slides for a student seminar.", "job_location": "UiTM Shah Alam", "job_type": "Presentation", "hourly_rate": 12, "required_hours": 6, "job_status": "Open", "date_posted": "2026-01-10", "application_deadline": "2026-01-20"},
    {"job_id": 3, "employer_id": 3, "job_title": "Video Editing for Campus Event", "job_description": "Edit footage from the campus event into a short video.", "job_location": "UiTM Shah Alam", "job_type": "Video Editing", "hourly_rate": 20, "required_hours": 4, "job_status": "In progress", "date_posted": "2026-01-10", "application_deadline": "2026-01-18"},
    {"job_id": 4, "employer_id": 4, "job_title": "Create Infographic for Research Project", "job_description": "Create an infographic explaining the research findings.", "job_location": "UiTM Shah Alam", "job_type": "Design", "hourly_rate": 12, "required_hours": 5, "job_status": "Open", "date_posted": "2026-01-10", "application_deadline": "2026-01-25"}
  ],
  JOB_SKILL: [
    {"job_skill_id": 1, "job_id": 1, "skill_id": 1},
    {"job_skill_id": 2, "job_id": 1, "skill_id": 2},
    {"job_skill_id": 3, "job_id": 2, "skill_id": 3},
    {"job_skill_id": 4, "job_id": 3, "skill_id": 4},
    {"job_skill_id": 5, "job_id": 4, "skill_id": 2}
  ],
  APPLICATION: [
    {"application_id": 1, "user_id": 1, "job_id": 1, "application_date": "2026-01-20", "application_status": "Pending", "cover_letter": "I can prepare the event poster."},
    {"application_id": 2, "user_id": 1, "job_id": 2, "application_date": "2026-01-18", "application_status": "Accepted", "cover_letter": "I can design the seminar slides."},
    {"application_id": 3, "user_id": 1, "job_id": 3, "application_date": "2026-01-15", "application_status": "Accepted", "cover_letter": "I can edit the event footage."},
    {"application_id": 4, "user_id": 5, "job_id": 4, "application_date": "2026-01-20", "application_status": "Pending", "cover_letter": "I can illustrate the research findings."},
    {"application_id": 5, "user_id": 6, "job_id": 4, "application_date": "2026-01-19", "application_status": "Pending", "cover_letter": "I can lay out the research results."}
  ],
  WAGE: [
    {"wage_id": 1, "application_id": 2, "hours_worked": 3, "hourly_rate": 12, "gross_pay": 36, "platform_fee": 3.6, "net_pay": 32.4, "payment_status": "Paid", "payment_date": "2026-01-26"},
    {"wage_id": 2, "application_id": 2, "hours_worked": 2.5, "hourly_rate": 12, "gross_pay": 30, "platform_fee": 3, "net_pay": 27, "payment_status": "Paid", "payment_date": "2026-01-26"},
    {"wage_id": 3, "application_id": 3, "hours_worked": 4, "hourly_rate": 20, "gross_pay": 80, "platform_fee": 8, "net_pay": 72, "payment_status": "Pending", "payment_date": null}
  ]
};

// Show the sample data for the page you open.
(() => {
  const { USER, EMPLOYER, SKILL, STUDENT_SKILL, JOB, JOB_SKILL, APPLICATION, WAGE } = demoData;
  const page = document.body.dataset.page;
  const me = USER.find(u => u.user_id === (page.startsWith('admin/') ? 7 : 1));
  const $ = selector => document.querySelector(selector);
  const esc = value => String(value ?? '').replace(/[&<>"']/g, ch => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
  const job = id => JOB.find(j => j.job_id === id);
  const employer = j => EMPLOYER.find(o => o.employer_id === j.employer_id);
  const user = id => USER.find(u => u.user_id === id);
  const skill = id => SKILL.find(s => s.skill_id === id);
  const posted = JOB.filter(j => employer(j).user_id === me.user_id);
  const mine = APPLICATION.filter(a => a.user_id === me.user_id);
  const accepted = mine.filter(a => a.application_status === 'Accepted');
  const wages = WAGE.filter(w => mine.some(a => a.application_id === w.application_id));
  const wageJob = w => job(mine.find(a => a.application_id === w.application_id).job_id);
  const jobSkills = j => JOB_SKILL.filter(s => s.job_id === j.job_id).map(s => skill(s.skill_id));
  const sum = field => Number(wages.reduce((v,w) => v + w[field], 0).toFixed(2));
  const rm = n => 'RM' + n.toFixed(2);
  const badge = status => '<span class="badge b-' + ({Open:'ok',Accepted:'ok',Paid:'ok',Pending:'wn',Rejected:'bd'}[status] || 'in') + '">' + esc(status) + '</span>';
  const url = j => (page === 'index' ? '' : '../')+'gigs/details'+(j.job_id === 1 ? '' : '-'+j.job_id)+'.html';
  const link = j => '<a href="'+url(j)+'">'+esc(j.job_title)+'</a>';
  const short = me.full_name.split(' ')[0];
  document.querySelectorAll('header [data-db="USER.full_name"]').forEach(el => el.textContent = short);
  function stats(values) {
    document.querySelectorAll('main .stat b').forEach((el,i) => el.textContent = values[i]);
  }
  function table(i, labels, rows) {
    const t = document.querySelectorAll('main table.mobile-records')[i];
    t.tHead.rows[0].innerHTML = labels.map(l => '<th scope="col">'+l+'</th>').join('');
    t.tBodies[0].innerHTML = rows.map(({cells,category=''}) => '<tr class="item" data-cat="'+esc(category)+'">'+cells.map((v,k) => '<td><span class="cell-label" aria-hidden="true">'+labels[k]+'</span>'+v+'</td>').join('')+'</tr>').join('');
  }
  function articles(list) {
    return list.map(j => '<article class="job item" data-cat="'+esc(j.job_type)+'"><div><h3>'+link(j)+'</h3><small>'+esc(j.job_type)+' &middot; '+esc(employer(j).company_name)+' &middot; '+esc(j.job_status)+'</small></div><div class="rate">RM'+j.hourly_rate+'<small>/hr</small></div></article>').join('');
  }
  function options(list, id, label) {
    return list.map(r => '<option value="'+esc(r[id])+'">'+esc(label(r))+'</option>').join('');
  }
  const selectedId = Number(new URLSearchParams(location.search).get('id'));
  if (page === 'index') {
    $('#sample-listings').innerHTML=JOB.slice(0,3).map(j => '<div class="listing"><span>'+esc(j.job_type)+'</span><div><h3>'+link(j)+'</h3><small>'+esc(employer(j).company_name)+' &middot; '+esc(j.job_status)+'</small></div><b>RM'+j.hourly_rate+'<small> / hr</small></b></div>').join('');
  } else if (page === 'gigs/list') {
    $('#list').innerHTML=articles(JOB); $('#count').textContent=JOB.length;
  } else if (page === 'gigs/details') {
    const j=job(Number(document.body.dataset.jobId) || selectedId || 1);
    if (!j) { $('#main').textContent='This sample gig could not be found.'; return; }
    const org=employer(j);
    $('[data-db="JOB.job_title"]').textContent=j.job_title;
    $('[data-db="JOB.job_description"]').textContent=j.job_description;
    $('.row.sp .badge').outerHTML=badge(j.job_status);
    $('#poster').textContent=org.company_name+' · '+user(org.user_id).full_name;
    const info=[['Organisation',org.company_name],['About the employer',org.company_description],['Address',org.company_address],['Contact number',org.contact_number],['Hourly rate',rm(j.hourly_rate)+'/hr'],['Job type',j.job_type],['Location',j.job_location],['Required hours',j.required_hours],['Skills',jobSkills(j).map(s=>s.skill_name).join(', ')],['Posted',j.date_posted],['Apply by',j.application_deadline],['Status',j.job_status]];
    $('aside table').innerHTML=info.map(([k,v])=>'<tr><th scope="row">'+k+'</th><td>'+esc(v)+'</td></tr>').join('');
    $('[name="job_id"]').value=j.job_id;
  } else if (page === 'gigs/create' || page === 'gigs/edit') {
    const orgs=EMPLOYER.filter(o=>o.user_id===me.user_id);
    $('[name="employer_id"]').innerHTML=options(orgs,'employer_id',o=>o.company_name);
    if (page === 'gigs/edit') {
      const j=posted.find(j=>j.job_id===(selectedId || posted[0]?.job_id));
      if (!j) { $('#main').textContent='This sample gig is unavailable to edit.'; return; }
      for (const [key,value] of Object.entries(j)) {
        const control=document.querySelector('main [name="'+key+'"]');
        if (control) control.value=value;
      }
      $('[name="required_skills"]').value=jobSkills(j).map(s=>s.skill_name).join(', ');
    }
  } else if (page === 'auth/profile') {
    $('#profile-name').textContent=me.full_name;
    $('.profile-identity p').textContent=me.email+' · '+me.phone_number;
    const skills=STUDENT_SKILL.filter(s=>s.user_id===me.user_id);
    $('.profile-skills').innerHTML='<h3>My skills</h3>'+skills.map(s=>'<span class="chip" title="'+esc(skill(s.skill_id).skill_description)+'">'+esc(skill(s.skill_id).skill_name)+' · '+esc(s.skill_level)+'</span>').join('');
    $('[name="full_name"]').value=me.full_name; $('#email').value=me.email;
    $('[name="phone_number"]').value=me.phone_number;
    $('#skills').value=skills.map(s=>skill(s.skill_id).skill_name).join(', ');
  } else if (page === 'dashboard/student') {
    // Faiz: show this student's data only, including paid vs pending earnings.
    const paid = wages.filter(w => w.payment_status === 'Paid');
    const paidNet = paid.reduce((total,w) => total + Number(w.net_pay), 0);
    const pendingNet = wages.filter(w => w.payment_status === 'Pending')
      .reduce((total,w) => total + Number(w.net_pay), 0);
    stats([posted.length,mine.length,accepted.length,rm(paidNet)]);
    $('[data-db="USER.full_name"]').textContent = short;
    $('#pending-earnings').textContent = rm(pendingNet);
    $('#posted-list').innerHTML = posted.length ? articles(posted) : '<p class="empty-state">You have not posted any gigs yet. <a href="../gigs/create.html">Post your first gig</a>.</p>';
    const recent = [...mine].sort((a,b) => b.application_date.localeCompare(a.application_date)).slice(0,5);
    table(0,['Gig','Status','Applied on'],recent.map(a=>({cells:[link(job(a.job_id)),badge(a.application_status),esc(a.application_date)]})));
    if (!recent.length) $('main table.mobile-records tbody').innerHTML = '<tr><td colspan="3">No applications yet. Browse gigs to get started.</td></tr>';
  } else if (page === 'applications/my-applications') {
    table(0,['Gig','Rate','Applied on','Status','Action'],mine.map(a=>({category:a.application_status,cells:[link(job(a.job_id)),rm(job(a.job_id).hourly_rate),esc(a.application_date),badge(a.application_status),a.application_status==='Pending'?'<button class="btn sm alt" data-confirm="Withdraw this sample application?" data-toast="Application withdrawn in this preview.">Withdraw</button>':'&ndash;']})));
  } else if (page === 'applications/my-jobs') {
    table(0,['Gig','Rate','Apply by','Status','Action'],accepted.map(a=>{const j=job(a.job_id);return {cells:[link(j),rm(j.hourly_rate),esc(j.application_deadline),badge(a.application_status),'<a href="../worklog/log.html?id='+a.application_id+'">Log hours</a>']};}));
    table(1,['Gig','Rate','Status','Applicants','Action'],posted.map(j=>({cells:[link(j),rm(j.hourly_rate),badge(j.job_status),'<a href="received.html?id='+j.job_id+'">'+APPLICATION.filter(a=>a.job_id===j.job_id).length+'</a>','<a href="../gigs/edit.html?id='+j.job_id+'">Edit</a>']})));
  } else if (page === 'applications/received') {
    const picker=$('#g');
    picker.innerHTML=options(posted,'job_id',j=>j.job_title);
    if(posted.some(j=>j.job_id===selectedId))picker.value=selectedId;
    function renderApplicants(){
      table(0,['Applicant','Cover letter','Applied on','Status','Decision'],APPLICATION.filter(a=>a.job_id===Number(picker.value)).map(a=>({cells:[esc(user(a.user_id).full_name),esc(a.cover_letter),esc(a.application_date),badge(a.application_status),a.application_status==='Pending'?'<div class="row"><button class="btn sm ok" data-confirm="Accept this applicant?" data-set-status="Accepted">Accept</button><button class="btn sm danger" data-confirm="Reject this applicant?" data-set-status="Rejected">Reject</button></div>':'&ndash;']})));
    }
    renderApplicants();picker.addEventListener('change',renderApplicants);
  } else if (page === 'worklog/log') {
    $('#application_id').innerHTML=options(accepted,'application_id',a=>job(a.job_id).job_title);
    if (accepted.some(a=>a.application_id===selectedId)) $('#application_id').value=selectedId;
    table(0,['Gig','Hours','Payment'],wages.map(w=>({cells:[link(wageJob(w)),w.hours_worked,badge(w.payment_status)]})));
  } else if (page === 'wages/summary') {
    // Faiz: compute every wage from hours x rate, rather than trusting stored totals.
    const entries = wages.map(w => {
      const gross = Number((w.hours_worked * w.hourly_rate).toFixed(2));
      const fee = Number((gross * 0.10).toFixed(2));
      return {...w, gross, fee, net: Number((gross - fee).toFixed(2))};
    });
    const total = key => entries.reduce((n,w) => n + w[key], 0);
    stats([Number(total('hours_worked').toFixed(2)),rm(total('gross')),rm(total('fee')),rm(total('net'))]);
    const paid = entries.filter(w => w.payment_status === 'Paid');
    const pending = entries.filter(w => w.payment_status !== 'Paid');
    $('#paid-total').textContent = rm(paid.reduce((n,w) => n+w.net,0));
    $('#pending-total').textContent = rm(pending.reduce((n,w) => n+w.net,0));
    const renderWages = () => {
      const filter = $('#payment-filter').value;
      const filtered = entries.filter(w => filter === 'All' || w.payment_status === filter);
      table(0,['Gig','Hours','Rate','Gross','Fee','Net','Payment','Paid on'],filtered.map(w=>({cells:[link(wageJob(w)),esc(w.hours_worked),rm(w.hourly_rate),rm(w.gross),rm(w.fee),rm(w.net),badge(w.payment_status),esc(w.payment_date || '—')]})));
      if (!filtered.length) $('main table.mobile-records tbody').innerHTML = '<tr><td colspan="8">No wage entries match this filter.</td></tr>';
      $('#entry-count').textContent = filtered.length + ' entr' + (filtered.length === 1 ? 'y' : 'ies');
    };
    $('#payment-filter').addEventListener('change', renderWages);
    renderWages();
  } else if (page === 'admin/dashboard') {
    stats([USER.length,JOB.length,APPLICATION.length,JOB.filter(j=>['Open','In progress'].includes(j.job_status)).length]);
  } else if (page === 'admin/users' || page === 'admin/gigs') {
    // The status change is for this preview.
    const isUser=page==='admin/users';
    const action=isUser?'Suspend':'Hide', normal=isUser?'Active':'Visible', other=isUser?'Suspended':'Hidden';
    const toggle='<button class="btn sm danger" data-a="'+normal+'" data-b="'+other+'" data-la="'+action+'" data-lb="Restore" data-confirm="Change status in this preview?">'+action+'</button>';
    if(isUser)table(0,['Name','Email','Role','Preview status','Action'],USER.map(u=>({cells:[esc(u.full_name),esc(u.email),esc(u.role),badge(normal),toggle]})));
    else table(0,['Gig','Employer','Rate','Preview visibility','Action'],JOB.map(j=>({cells:[link(j),esc(employer(j).company_name),rm(j.hourly_rate),badge(normal),toggle]})));
  }
})();
