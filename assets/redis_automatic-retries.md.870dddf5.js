import{_ as e,c as t,o as n,a as s}from"./app.c4573477.js";const m='{"title":"Automatic Retries","description":"","frontmatter":{"slug":"automatic-retries","title":"Automatic Retries"},"headers":[],"relativePath":"redis/automatic-retries.md"}',a={},o=s(`<p>One feature that improves the resilience of <code>RedisClient</code> connections is Auto Retry where the RedisClient will transparently retry failed Redis operations due to Socket and I/O Exceptions in an exponential backoff starting from <strong>10ms</strong> up until the <code>RetryTimeout</code> of <strong>10000ms</strong>. These defaults can be tweaked with:</p><div class="language-csharp"><pre><code>RedisConfig<span class="token punctuation">.</span>DefaultRetryTimeout <span class="token operator">=</span> <span class="token number">10000</span><span class="token punctuation">;</span>
RedisConfig<span class="token punctuation">.</span>BackOffMultiplier <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
</code></pre></div><p>The <code>RetryTimeout</code> can also be configured on the connection string with <code>?RetryTimeout=10000</code>.</p>`,3),i=[o];function c(r,p,d,u,l,_){return n(),t("div",null,i)}var h=e(a,[["render",c]]);export{m as __pageData,h as default};