# Pocok Project
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
    <td><b><code>pocok project add [&lt;target-dir&gt;] [&lt;catalog&gt;]</code></b></td>
    <td>
      <p>Add directory to catalog.</p>
      <p><code>[&lt;target-dir&gt;]</code> - Target directory that will be added to the catalog. Default is the current directory.</p>
      <p><code>[&lt;catalog&gt;]</code> - Name of the catalog.</p>
    </td>
  </tr>
  <tr>
    <td><b><code>pocok project init [&lt;project&gt;]</code></b></td>
    <td>
      <p>Init default project, example poco.yml and docker-compose.yml files will be created.</p>
      <p><code>[&lt;project&gt;]</code> - Name of the project that will be added to the catalog</p>
    </td>
  </tr>
  <tr>
    <td><b><code>pocok project ls</code></b></td>
    <td>
      <p>List all available projects from the catalog(s).</p>
    </td>
  </tr>
  <tr>
    <td><b><code>pocok project (remove|rm) &lt;name&gt;</code></b></td>
    <td>
      <p>Remove project from the catalog.</p>
      <p><code>&lt;name&gt;</code> - Name of the project that will be removed</p>
    </td>
  </tr>
  </tbody>
</table>
{% endraw %}