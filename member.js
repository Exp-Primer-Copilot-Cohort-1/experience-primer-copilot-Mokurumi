function skillsMember () {
  var skills = ['JavaScript', 'HTML', 'CSS', 'PHP', 'Python', 'C++'];
  var skillsMember = document.getElementById('skillsMember');
  var skillsMemberText = '';
  for (var i = 0; i < skills.length; i++) {
    skillsMemberText += '<li>' + skills[i] + '</li>';
  }
  skillsMember.innerHTML = skillsMemberText;
}
