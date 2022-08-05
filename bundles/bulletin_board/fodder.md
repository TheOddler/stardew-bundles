<div class="bundle">

    {% include bundle_header.html name="Fodder Bundle" color="yellow" %}

    {% include item.html name="Wheat" count=10 %}
    {% include item.html name="Hay" count=10 %}
    {% include item.html name="Apple" count=3 %}

    {% include bundle_footer.html complete_count=3 reward="Heater" %}

</div>