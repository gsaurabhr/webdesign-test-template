---
title: "test page"
layout: gridlay
sitemap: false
permalink: /test/
---

<!--

# Group Members

<ul style="display: flex;list-style-type: none; padding:">
  <li><button>Assistant Professor</button></li>
  <li><button>Phd Student</button></li>
  <li><button>MS(R) Student</button></li>
  <li><button>MSc Student</button></li>
  <li><button>Research Assistant</button></li>
  <li><button>Undergraduate Student</button></li>
</ul>

{% assign ap_members = '' | split: '' %}
{% assign us_members = '' | split: '' %}
{% assign msr_members = '' | split: '' %}
{% assign phd_members = '' | split: '' %}
{% assign ra_members = '' | split: '' %}
{% assign int_members = '' | split: '' %}
{% assign oth_members = '' | split: '' %}

{% assign sorted_members = site.data.team | sort: "year" %}

{% for member in sorted_members %}
{% if member.position == 'Assistant Professor' %}
{% assign ap_members = ap_members | push: member %}
{% elsif member.position == 'Undergraduate student' %}
{% assign us_members = us_members | push: member %}
{% elsif member.position == 'MS(R) student' %}
{% assign msr_members = msr_members | push: member %}
{% elsif member.position == 'PhD student' %}
{% assign phd_members = phd_members | push: member %}
{% elsif member.position == 'Research Assistant' %}
{% assign ra_members = ra_members | push: member %}
{% elsif member.position == 'Intern' %}
{% assign int_members = int_members | push: member %}
{% else %}
{% assign oth_members = oth_members | push: member %}
{% endif %}
{% endfor %}

{% assign sorted_members = '' | split: '' | concat: ap_members | concat: phd_members | concat: msr_members | concat: ra_members | concat: us_members | concat: int_members | concat: oth_members %}


{% assign number_printed = 0 %}
{% for member in sorted_members %}
{% if member.display == 1 and member.alumni == 0 %}

{% assign even_odd = number_printed | modulo: 2 %}

{% if even_odd == 0 %}
<div class="row">
{% endif %}

<div class="col-sm-6 clearfix">
  <img src="{{ member.image }}" class="img-responsive" width="35%" style="float: left" />
  <h4>{{ member.name }}</h4>
  <i>{{ member.position }}, {{ member.affiliation }} <br>email: {{ member.email }}</i>
  <ul style="overflow: hidden">

  {% if member.bio1 != "" %}
    <li> {{ member.bio1 }} </li>
  {% endif %}
  {% if member.bio2 != "" %}
    <li> {{ member.bio2 }} </li>
  {% endif %}
  {% if member.bio3 != "" %}
    <li> {{ member.bio3 }} </li>
  {% endif %}
  {% if member.bio4 != "" %}
    <li> {{ member.bio4 }} </li>
  {% endif %}

  </ul>
</div>

{% assign number_printed = number_printed | plus: 1 %}

{% if even_odd == 1 %}
</div>
{% endif %}
{% endif %}
{% endfor %}

{% assign even_odd = number_printed | modulo: 2 %}
{% if even_odd == 1 %}
</div>
{% endif %}

## Alumni

{% for member in sorted_members %}
{% if member.display == 1 and member.alumni == 1 %}

<div class="col-sm-12 clearfix">
  <img src="{{ member.image }}" class="img-thumbnail" width="100px" style="float: left" />
  <h4>{{ member.name }}</h4>
  <i>{{ member.position }}, {{ member.affiliation }} ({{ member.year }}) <br>email: {{ member.email }}</i>
  <h5>{{ member.alumni_current }}</h5>
</div>


{% endif %}
{% endfor %}

<script>
  console.log('Hello World')

</script> -->

<!-- ---
title: "test page"
layout: gridlay
sitemap: false
permalink: /test/
--- -->

# Group Members
<!-- Group Members Filter -->
<ul id="filter-options" style="display: flex; list-style-type: none; padding: 0;">
  <li><button class="filter-button" data-position="Assistant Professor">Assistant Professor</button></li>
  <li><button class="filter-button" data-position="PhD student">PhD Student</button></li>
  <li><button class="filter-button" data-position="MS(R) student">MS(R) Student</button></li>
  <li><button class="filter-button" data-position="MSc student">MSc Student</button></li>
  <li><button class="filter-button" data-position="Research Assistant">Research Assistant</button></li>
  <li><button class="filter-button" data-position="Undergraduate student">Undergraduate Student</button></li>
</ul>

<!-- Group Members Section -->
<div id="group-members">
  {% assign sorted_members = site.data.team | sort: "year" %}
  {% for member in sorted_members %}
    <div class="member" data-position="{{ member.position }}" style="display: none;">
      <div class="col-sm-6 clearfix">
        <img src="{{ member.image }}" class="img-responsive" width="35%" style="float: left;" />
        <h4>{{ member.name }}</h4>
        <i>{{ member.position }}, {{ member.affiliation }} <br>email: {{ member.email }}</i>
        <ul style="overflow: hidden;">
          {% if member.bio1 != "" %}<li>{{ member.bio1 }}</li>{% endif %}
          {% if member.bio2 != "" %}<li>{{ member.bio2 }}</li>{% endif %}
          {% if member.bio3 != "" %}<li>{{ member.bio3 }}</li>{% endif %}
          {% if member.bio4 != "" %}<li>{{ member.bio4 }}</li>{% endif %}
        </ul>
      </div>
    </div>
  {% endfor %}
</div>

<!-- JavaScript for Filtering -->
<script>
  // Function to filter members based on selected positions
  function filterMembers() {
    // Get all filter buttons
    var filterButtons = document.querySelectorAll('.filter-button');
    
    // Get all member elements
    var members = document.querySelectorAll('.member');
    
    // Iterate through each member element
    members.forEach(function(member) {
      // Hide all members
      member.style.display = 'none';
      
      // Get the position of the member
      var position = member.dataset.position;
      
      // Check if any filter button for this position is selected
      var showMember = Array.from(filterButtons).some(function(button) {
        return button.classList.contains('selected') && button.dataset.position === position;
      });
      
      // If a filter button is selected for this position or no filters are selected, show the member
      if (showMember) {
        member.style.display = 'block';
      }
    });
  }
  
  // Add event listeners to filter buttons
  document.querySelectorAll('.filter-button').forEach(function(button) {
    button.addEventListener('click', function() {
      // Toggle the 'selected' class to indicate whether the button is selected or not
      this.classList.toggle('selected');
      // Call the filterMembers function to update the display based on selected filters
      filterMembers();
    });
  });
</script>
