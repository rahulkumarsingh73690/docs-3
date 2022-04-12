import{_ as e,c as n,o,a as s}from"./app.da189b1e.js";const f='{"title":"Troubleshooting","description":"","frontmatter":{},"headers":[{"level":2,"title":"Troubleshooting","slug":"troubleshooting"},{"level":3,"title":"x: command not found","slug":"x-command-not-found"},{"level":3,"title":"SSL Connection Errors","slug":"ssl-connection-errors"}],"relativePath":"web-trouble.md","lastUpdated":1649756885191}',t={},a=s(`__VP_STATIC_START__<hr><h2 id="troubleshooting" tabindex="-1">Troubleshooting <a class="header-anchor" href="#troubleshooting" aria-hidden="true">#</a></h2><h3 id="x-command-not-found" tabindex="-1">x: command not found <a class="header-anchor" href="#x-command-not-found" aria-hidden="true">#</a></h3><p>If after installing any of the <code>dotnet</code> tools it fails with <code>bash: x: command not found</code> you&#39;ll need to add <strong>dotnet tools</strong> to your <code>PATH</code> which you can do in Linux Bash with:</p><div class="language-bash"><pre><code>$ <span class="token builtin class-name">echo</span> <span class="token string">&quot;export PATH=\\<span class="token environment constant">$HOME</span>/.dotnet/tools:\\<span class="token environment constant">$PATH</span>&quot;</span> <span class="token operator">&gt;&gt;</span> ~/.bashrc
$ <span class="token builtin class-name">.</span> ~/.bashrc
</code></pre></div><h3 id="ssl-connection-errors" tabindex="-1">SSL Connection Errors <a class="header-anchor" href="#ssl-connection-errors" aria-hidden="true">#</a></h3><p>To resolve SSL Connection errors you can try <a href="https://github.com/dotnet/corefx/issues/33179#issuecomment-435118249" target="_blank" rel="noopener noreferrer">commenting out ssl_conf = ssl_sect</a>, e.g:</p><div class="language-bash"><pre><code>$ <span class="token function">sudo</span> <span class="token function">vi</span> /etc/ssl/openssl.cnf
</code></pre></div><p>Comment out line in <code>vi</code> using a <code>#</code> prefix, write changes and quit:</p><div class="language-"><pre><code>:%s/^ssl_conf/#&amp;/
:wq
</code></pre></div><p>If that doesn&#39;t resolve the issue you can try <a href="https://github.com/dotnet/corefx/issues/30147#issuecomment-410526404" target="_blank" rel="noopener noreferrer">updating the local ca-certificates</a>:</p><div class="language-bash"><pre><code>$ <span class="token function">sudo</span> update-ca-certificates --fresh
</code></pre></div><p>Or try <a href="https://github.com/dotnet/core/issues/1941#issuecomment-421387136" target="_blank" rel="noopener noreferrer">updating the SSL_CERT Environment variables</a> before running the tool again:</p><div class="language-bash"><pre><code><span class="token builtin class-name">export</span> <span class="token assign-left variable">SSL_CERT_FILE</span><span class="token operator">=</span>/etc/ssl/certs/ca-certificates.crt
<span class="token builtin class-name">export</span> <span class="token assign-left variable">SSL_CERT_DIR</span><span class="token operator">=</span>/dev/null
</code></pre></div><p>Finally you can try running the <code>x</code> tool with the <code>--ignore-ssl-errors</code> switch, e.g:</p><div class="language-bash"><pre><code>$ x new vue-lite VueLite --ignore-ssl-errors
</code></pre></div>__VP_STATIC_END__`,16),r=[a];function c(i,l,d,p,u,h){return o(),n("div",null,r)}var m=e(t,[["render",c]]);export{f as __pageData,m as default};
