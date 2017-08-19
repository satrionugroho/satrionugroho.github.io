---
layout: default
title: Home
---

<ul class="posts">
  {% for post in site.posts %}
    <li>
      {% assign date_format = site.minima.date_format | default: "%b %-d, %Y" %}
      <span class="post-meta">{{ post.date | date: date_format }}</span>
      <h2>
        <a class="post-link" href="{{ post.url | relative_url }}">{{ post.title | escape }}</a>
      </h2>
    </li>
  {% endfor %}
</ul>

<div class="pagination">
  {% if paginator.previous_page %}
    <a class="pagination-item newer" href="{{ site.baseurl }}/{% if paginator.page > 2 %}page{{paginator.previous_page}}{% endif %}">
      <i class="fa fa-arrow-left"></i> Newer
   </a>
  {% endif %}

  {% if paginator.next_page %}
    <a class="pagination-item older" href="{{ site.baseurl }}/page{{paginator.next_page}}">
      Older <i class="fa fa-arrow-right"></i>
    </a>
  {% endif %}
</div>
