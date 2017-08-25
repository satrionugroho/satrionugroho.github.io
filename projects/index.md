---
layout: page
title: Projects
---

<div class="projects">
  {% for project in site.projects %}
    <div class="projects_post">
      <h2 class="projects_title throwable">
        <a href="{{ project.website }}">
          {{ project.title }}
        </a>
        <small>{{ project.tagline }}</small>
      </h2>

      {{ project.content }}
    </div>
  {% endfor %}
</div>
