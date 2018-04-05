# Pocok
{% raw %}
<table>
  <thead>
  <tr>
    <th width="40%"><b>Command</b></th>
    <th width="60%"><b>Description</b></th>
  </tr>
  </thead>
  <tbody>
  <tr>
    <td><b><code>pocok init [&lt;name&gt;]</code></b></td>
    <td>
      <p>Initialize pocok project, pocok.yml and docker-compose.yml will be created if they don't exist.</p>
      <p><code>[&lt;name&gt;]</code> - Name of the project.</p>
    </td>
  </tr>
  <tr>
    <td><b><code>pocok install [&lt;name&gt;] [&lt;plan&gt;]</code></b></td>
    <td>
      <p>Clone projects from a remote repository, run install scripts.</p>
      <p><code>[&lt;name&gt;]</code> - Name of the project.</p>
      <p><code>[&lt;plan&gt;]</code> - Name of the project's plan.</p>
    </td>
  </tr>
  <tr>
    <td><b><code>pocok (start|up) [&lt;name&gt;] [&lt;plan&gt;]</code></b></td>
    <td>
      <p>Start poco project with the default or defined plan.</p>
      <p><code>[&lt;name&gt;]</code> - Name of the project.</p>
      <p><code>[&lt;plan&gt;]</code> - Name of the project's plan.</p>
    </td>
  </tr>
  <tr>
    <td><b><code>pocok (stop|down) [&lt;name&gt;] [&lt;plan&gt;]</code></b></td>
    <td>
      <p>Stop project with the default or defined plan.</p>
      <p><code>[&lt;name&gt;]</code> - Name of the project.</p>
      <p><code>[&lt;plan&gt;]</code> - Name of the project's plan.</p>
    </td>
  </tr>
  <tr>
    <td><b><code>pocok restart [&lt;name&gt;] [&lt;plan&gt;]</code></b></td>
    <td>
      <p>Restart project with the default or defined plan.</p>
      <p><code>[&lt;name&gt;]</code> - Name of the project.</p>
      <p><code>[&lt;plan&gt;]</code> - Name of the project's plan.</p>
    </td>
  </tr>
  <tr>
    <td><b><code>pocok (log|logs) [&lt;name&gt;] [&lt;plan&gt;]</code></b></td>
    <td>
      <p>Print docker containers logs of the current project with the default or defined plan.</p>
      <p><code>[&lt;name&gt;]</code> - Name of the project.</p>
      <p><code>[&lt;plan&gt;]</code> - Name of the project's plan.</p>
    </td>
  </tr>
  <tr>
    <td><b><code>pocok build [&lt;name&gt;] [&lt;plan&gt;]</code></b></td>
    <td>
      <p>Build containers depends defined project and plan.</p>
      <p><code>[&lt;name&gt;]</code> - Name of the project.</p>
      <p><code>[&lt;plan&gt;]</code> - Name of the project's plan.</p>
    </td>
  </tr>
  <tr>
    <td><b><code>pocok ps [&lt;name&gt;] [&lt;plan&gt;]</code></b></td>
    <td>
      <p>Print containers statuses which depends defined project and plan.</p>
      <p><code>[&lt;name&gt;]</code> - Name of the project.</p>
      <p><code>[&lt;plan&gt;]</code> - Name of the project's plan.</p>
    </td>
  </tr>
  <tr>
    <td><b><code>pocok plan ls [&lt;name&gt;]</code></b></td>
    <td>
      <p>Print all available plans of the project.</p>
      <p><code>[&lt;name&gt;]</code> - Name of the project.</p>
    </td>
  </tr>
  <tr>
    <td><b><code>pocok pull [&lt;name&gt;] [&lt;plan&gt;]</code></b></td>
    <td>
      <p>Pull all necessary images for the project with the defined or default plan.</p>
      <p><code>[&lt;name&gt;]</code> - Name of the project.</p>
      <p><code>[&lt;plan&gt;]</code> - Name of the project's plan.</p>
    </td>
  </tr>
  <tr>
    <td><b><code>pocok branches [&lt;name&gt;]</code></b></td>
    <td>
      <p>List all available git branches of the project.</p>
      <p><code>[&lt;name&gt;]</code> - Name of the project.</p>
    </td>
  </tr>
  <tr>
    <td><b><code>pocok pack [&lt;name&gt;] [&lt;plan&gt;]</code></b></td>
    <td>
      <p>Pack the selected project's plan configuration with docker images into an archive.</p>
      <p><code>[&lt;name&gt;]</code> - Name of the project.</p>
      <p><code>[&lt;plan&gt;]</code> - Name of the project's plan.</p>
    </td>
  </tr>
  <tr>
    <td><b><code>pocok unpack [&lt;name&gt;]</code></b></td>
    <td>
      <p>Unpack archive, install images to local repository.</p>
      <p><code>[&lt;name&gt;]</code> - Name of the project.</p>
      <p><code>[&lt;plan&gt;]</code> - Name of the project's plan.</p>
    </td>
  </tr>
  <tr>
    <td><b><code>pocok clean</code></b></td>
    <td><p>Clean all containers and images from the local Docker repository.</p></td>
  </tr>
  </tbody>
</table>
{% endraw %}