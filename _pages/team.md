<!-- ---
title: "test page"
layout: gridlay
sitemap: false
permalink: /test/
---

# Group Members

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
{% endfor %} -->


---
title: "test page"
layout: gridlay
sitemap: false
permalink: /test/
---

<script>
  var selectedPositions = [];
</script>

## Filter by Position:
<select id="positionFilter" multiple>
  <option value="">All</option>
  <option value="Assistant Professor">Assistant Professor</option>
  <option value="PhD student">PhD Student</option>
  </select>

# Group Members

{% assign sorted_members = site.data.team | sort: "year" %}

<div id="memberList">
  {% for member in sorted_members %}
    {% if member.display == 1 and member.alumni == 0 %}

      {% assign even_odd = loop.index0 | modulo: 2 %}

      {% if even_odd == 0 %}
      <div class="row">
      {% endif %}

      <div class="col-sm-6 clearfix" data-position="{{ member.position }}">
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
          </ul>
      </div>

      {% assign number_printed = loop.index0 | plus: 1 %}

      {% if even_odd == 1 %}
      </div>
      {% endif %}
    {% endif %}
  {% endfor %}

  {% assign even_odd = loop.index0 | modulo: 2 %}
  {% if even_odd == 1 %}
  </div>
  {% endif %}
</div>

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
  document.addEventListener("DOMContentLoaded", function() {
    const positionFilter = document.getElementById("positionFilter");
    const memberList = document.getElementById("memberList");

    positionFilter.addEventListener("change", function() {
      selectedPositions = Array.from(positionFilter.selectedOptions).map(option => option.value);
      filterMembers(memberList);
    });

    function filterMembers(memberList) {
      const memberCards = memberList.querySelectorAll(".col-sm-6");
      for (const memberCard of memberCards) {
        const memberPosition = memberCard.dataset.position;
        memberCard.style.display = selectedPositions.length === 0 || selectedPositions.includes(memberPosition) ? "" : "none";
      }
    }
  });
</script>

