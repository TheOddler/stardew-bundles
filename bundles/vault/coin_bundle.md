
<div class="bundle">

    {% assign bundle_name = include.amount | number_with_delimiter | append: " Bundle" %}
    {% include bundle_header.html name=bundle_name color="red" %}

    {% include bundle_footer.html reward=include.reward reward_count=include.reward_count %}

</div>
