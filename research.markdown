---
layout: default
title: Research
permalink: /research/
---

# Research

---

## Building Responsible, Trustworthy, Inclusive, and Safe AI for Africa

At **CITADEL**, research is at the heart of our mission.  
We work to develop **artificial intelligence solutions** that address the unique challenges of Africa — from language preservation to sustainable agriculture — while remaining guided by the principles of:

> **Responsible • Trustworthy • Inclusive • Safe**

Our approach combines scientific excellence with a deep understanding of local realities.  
We believe AI must be both **technically robust** and **socially aware** to contribute meaningfully to development across the continent.

---

## Our Research Pillars

<div id="research-pillars">
    {% for pillar in site.data.research_pillars %}
    <div class="pillar">
        <div>
          <p>
            <i class="{{ pillar.icon }}" style="color: {{ pillar.color }};"></i>
            <h3 style="color:{{ pillar.color }}">{{ pillar.name }}</h3>
          </p>
        </div>
        <p>{{ pillar.description }}</p>
    </div>
    {% endfor %}
</div>

---

## Our Research Philosophy

We pursue **applied research** that connects **scientific innovation** with **societal needs**.  
Each project aims to produce measurable impact while respecting ethical and cultural values.  
Our interdisciplinary teams bring together experts in AI, data science, linguistics, agriculture, health, and policy.

---

## Publications

{% if site.data.publication %}
<div style="margin-top:2rem;">
  <ul>
  {% for pub in site.data.publications %}
    <li>
      <strong>{{ pub.title }}</strong><br>
      <em>{{ pub.authors }}</em> ({{ pub.year }})  
      {% if pub.link %}
      [Read more]({{ pub.link }})
      {% endif %}
    </li>
  {% endfor %}
  </ul>
</div>
{% else %}
<p><em>No publications available at the moment. Please check back soon.</em></p>
{% endif %}

<!-- <div id="research-section">
    <div id="research-area">
        <p>
            <img src="/assets/images/research.gif" alt="Research area">
        </p>
    </div>
</div> -->
