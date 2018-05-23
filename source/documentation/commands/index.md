---
title: Commands
---

# Commands
### proco
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
            <td><b><code>$:~ proco project-config [&lt;project&gt;] [&lt;plan&gt;]</code></b></td>
            <td>
                <p>Print full Docker compose configuration for a project's plan.</p>
                <p><code>[&lt;project&gt;]</code> - Name of the project in the catalog</p>
                <p><code>[&lt;plan&gt;]</code> - Name of the project's plan</p>
            </td>
        </tr>
        <tr>
            <td><b><code>$:~ proco clean</code></b></td>
            <td><p>Clean all containers and images from the local Docker repository.</p></td>
        </tr>
        <tr>
            <td><b><code>$:~ proco init [&lt;project&gt;]</code></b></td>
            <td>
                <p>Initialize proco project, proco.yml and docker-compose.yml will be created if they don't exist.</p>
                <p><code>[&lt;project&gt;]</code> - Name of the project in the catalog</p>
            </td>
        </tr>
        <tr>
            <td><b><code>$:~ proco install [&lt;project&gt;] [&lt;plan&gt;]</code></b></td>
            <td>
                <p>Clone projects from a remote repository, run install scripts.</p>
                <p><code>[&lt;project&gt;]</code> - Name of the project in the catalog</p>
                <p><code>[&lt;plan&gt;]</code> - Name of the project's plan</p>
            </td>
        </tr>
        <tr>
            <td><b><code>$:~ proco (start|up) [&lt;project&gt;] [&lt;plan&gt;]</code></b></td>
            <td>
                <p>Start proco project with the default or defined plan.</p>
                <p><code>[&lt;project&gt;]</code> - Name of the project in the catalog</p>
                <p><code>[&lt;plan&gt;]</code> - Name of the project's plan</p>
            </td>
        </tr>
        <tr>
            <td><b><code>$:~ proco (stop|down) [&lt;project&gt;] [&lt;plan&gt;]</code></b></td>
            <td>
                <p>Stop project with the default or defined plan.</p>
                <p><code>[&lt;project&gt;]</code> - Name of the project in the catalog</p>
                <p><code>[&lt;plan&gt;]</code> - Name of the project's plan</p>
            </td>
        </tr>
        <tr>
            <td><b><code>$:~ proco restart [&lt;project&gt;] [&lt;plan&gt;]</code></b></td>
            <td>
            <p>Restart project with the default or defined plan.</p>
                <p><code>[&lt;project&gt;]</code> - Name of the project in the catalog</p>
                <p><code>[&lt;plan&gt;]</code> - Name of the project's plan</p>
            </td>
        </tr>
        <tr>
            <td><b><code>$:~ proco (log|logs) [&lt;project&gt;] [&lt;plan&gt;]</code></b></td>
            <td>
            <p>Print docker containers logs of the current project with the default or defined plan.</p>
                <p><code>[&lt;project&gt;]</code> - Name of the project in the catalog</p>
                <p><code>[&lt;plan&gt;]</code> - Name of the project's plan</p>
            </td>
        </tr>
        <tr>
            <td><b><code>$:~ proco build [&lt;project&gt;] [&lt;plan&gt;]</code></b></td>
            <td>
                <p>Build containers depends defined project and plan.</p>
                <p><code>[&lt;project&gt;]</code> - Name of the project in the catalog</p>
                <p><code>[&lt;plan&gt;]</code> - Name of the project's plan</p>
            </td>
        </tr>
        <tr>
            <td><b><code>$:~ proco ps [&lt;project&gt;] [&lt;plan&gt;]</code></b></td>
            <td>
                <p>Print containers statuses which depends defined project and plan.</p>
                <p><code>[&lt;project&gt;]</code> - Name of the project in the catalog</p>
                <p><code>[&lt;plan&gt;]</code> - Name of the project's plan</p>
            </td>
        </tr>
        <tr>
            <td><b><code>$:~ proco plan ls [&lt;project&gt;]</code></b></td>
            <td>
                <p>Print all available plans of the project.</p>
                <p><code>[&lt;project&gt;]</code> - Name of the project in the catalog</p>
            </td>
        </tr>
        <tr>
            <td><b><code>$:~ proco pull [&lt;project&gt;] [&lt;plan&gt;]</code></b></td>
            <td>
                <p>Pull all necessary images for the project with the defined or default plan.</p>
                <p><code>[&lt;project&gt;]</code> - Name of the project in the catalog</p>
                <p><code>[&lt;plan&gt;]</code> - Name of the project's plan</p>
            </td>
        </tr>
        <tr>
            <td><b><code>$:~ proco branches [&lt;project&gt;]</code></b></td>
            <td>
                <p>List all available git branches of the project.</p>
                <p><code>[&lt;project&gt;]</code> - Name of the project in the catalog</p>
            </td>
        </tr>
        <tr>
            <td><b><code>$:~ proco pack [&lt;project&gt;] [&lt;plan&gt;]</code></b></td>
            <td>
                <p>Pack the selected project's plan configuration with docker images into an archive.</p>
                <p><code>[&lt;project&gt;]</code> - Name of the project in the catalog</p>
                <p><code>[&lt;plan&gt;]</code> - Name of the project's plan</p>
            </td>
        </tr>
        <tr>
            <td><b><code>$:~ proco unpack [&lt;project&gt;]</code></b></td>
            <td>
                <p>Unpack archive, install images to local repository.</p>
                <p><code>[&lt;project&gt;]</code> - Name of the project in the catalog</p>
                <p><code>[&lt;plan&gt;]</code> - Name of the project's plan</p>
            </td>
        </tr>
    </tbody>
</table>
{% endraw %}

### proco Repo
{% raw %}
<table>
    <thead>
        <tr>
            <th width="40%"><b>Command</b></th>
            <th width="60%"><b>Description</b></th>
        </tr>
    <thead>
    <tbody>
        <tr>
            <td><b><code>$:~ proco repo init</code></b></td>
            <td>
                <p>Initialize default environment and sample catalog.</p>
            </td>
        </tr>
        <tr>
            <td><b><code>$:~ proco repo ls</code></b></td>
            <td>
                <p>List the configs of catalogs.</p>
            </td>
        </tr>
        <tr>
            <td><b><code>$:~  proco repo (add|modify) &lt;name&gt; &lt;git-url&gt; [&lt;branch&gt;] [&lt;file&gt;]</code></b></td>
            <td>
                <p>Add/Modify new catalog to the config.</p>
                <p><code>&lt;name&gt;</code> - Name of the catalogue.</p>
                <p><code>&lt;git-url&gt;</code> - URL of catalog's GIT repository.</p>
                <p><code>[&lt;branch&gt;]</code> - Name of the branch that should be checked out. (default : master)</p>
                <p><code>[&lt;file&gt;]</code> - Name of the catalog file in the repository. (default: proco-catalog.yml)</p>
            </td>
        </tr>
        <tr>
            <td><b><code>$:~ proco repo (remove|rm) &lt;name&gt;</code></b></td>
            <td>
                <p>Remove catalog from local config.</p>
                <p><code>&lt;name&gt;</code> - Name of the catalog.</p>
            </td>
        </tr>
        <tr>
            <td><b><code>$:~ proco repo branch &lt;branch&gt; [&lt;name&gt;] [-f]</code></b></td>
            <td>
                <p>Switch catalog branch if it is using GIT.</p>
                <p><code>&lt;branch&gt;</code> - Name of the branch that should be checked out.</p>
                <p><code>[&lt;name&gt;]</code> - Name of the catalog.</p>
                <p><code>-f</code> - Name of the project's plan</p>
            </td>
        </tr>
        <tr>
            <td><b><code>$:~ proco repo branches [&lt;name&gt;]</code></b></td>
            <td>
                <p>List all available branches of catalog's GIT repository.</p>
                <p><code>[&lt;name&gt;]</code> - Name of the catalog.</p>
            </td>
        </tr>
        <tr>
            <td><b><code>$:~ proco repo push [&lt;name&gt;]</code></b></td>
            <td>
                <p>Push changes into catalog's remote GIT repository</p>
                <p><code>name</code> - Name of the catalog.</p>
            </td>
        </tr>
    </tbody>
</table>
{% endraw %}

### proco Project
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
            <td><b><code>proco project add [&lt;target-dir&gt;] [&lt;catalog&gt;]</code></b></td>
            <td>
                <p>Add directory to catalog.</p>
                <p><code>[&lt;target-dir&gt;]</code> - Target directory that will be added to the catalog. Default is the current directory.</p>
                <p><code>[&lt;catalog&gt;]</code> - Name of the catalog.</p>
            </td>
        </tr>
        <tr>
            <td><b><code>proco project init [&lt;project&gt;]</code></b></td>
            <td>
                <p>Create proco.yml and docker-compose.yml to a project if aren't exists.</p>
                <p><code>[&lt;project&gt;]</code> - Name of the project that will be added to the catalog</p>
            </td>
        </tr>
        <tr>
            <td><b><code>proco project ls</code></b></td>
            <td>
                <p>List all projects from the catalog(s).</p>
            </td>
        </tr>
        <tr>
            <td><b><code>proco project remove [&lt;project&gt;]</code></b></td>
            <td>
                <p>Remove project from the catalog.</p>
                <p><code>[&lt;project&gt;]</code> - Name of the project that will be removed</p>
            </td>
        </tr>
    </tbody>
</table>
{% endraw %}