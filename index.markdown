---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: Home
permalink: /
---

# Welcome to `CITADEL`

---

## The Interdisciplinary Center of Excellence in Artificial Intelligence for Development  
We are building AI talent and capacity in Burkina Faso and French-speaking Africa.  

---

### Our Mission
- **Research:** Analyze the state of the art in fundamental AI research, with a focus on African contexts. [More details and publication list](/research)
- **Training:** Develop local AI talent and promote inclusion, particularly increasing participation from underrepresented groups such as women. [Check our next events](/events)
- **Coordination:** Coordinate holistic deployment of AI models in real-world, contextualized applications.
- **Demonstration:** Showcase the opportunities and risks of AI to inform policymakers and civil society for better local governance and regulation. [Watch our demos / Try our tools](/demo) or [Book a demo](/demo-booking)

---

### Our Activities
We focus on **analysis, training, coordination, and demonstration** — taking concrete actions to ensure AI serves sustainable development across Africa.  
[Visit our Blog for more details](/blog)

---

### Our Partners

<div id="partners-section">
    {% for partner in site.data.partners %}
    <div class="partner">
        <p>
            <img src="{{ partner.logo }}" alt="{{ partner.name }}">
        </p>
        <hr>
        <p>
            <strong>Partner:</strong>
            <span>{{ partner.type }}</span>
            <a href="{{ partner.url }}" target="_blank">
                Learn More
            </a>
        </p>
    </div>
    {% endfor %}
</div>