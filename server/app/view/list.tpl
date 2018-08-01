<html>
  <head>
    <title>wll</title>
  </head>
  <body>
    <ul class="view">
      {% for item in list %}
        <li>
          <a href="{{ item.url }}">{{ item.title }}}</a>
        </li>
      {% endfor %}
    </ul>
  </body>
</html>