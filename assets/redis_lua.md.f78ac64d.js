import{_ as n,c as s,o as a,a as t}from"./app.da189b1e.js";const m='{"title":"RedisClient LUA APIs","description":"","frontmatter":{"slug":"lua","title":"RedisClient LUA APIs"},"headers":[{"level":3,"title":"Efficient SCAN in LUA","slug":"efficient-scan-in-lua"},{"level":3,"title":"ExecCachedLua","slug":"execcachedlua"},{"level":3,"title":"Usage Examples","slug":"usage-examples"},{"level":3,"title":"Other examples","slug":"other-examples"}],"relativePath":"redis/lua.md","lastUpdated":1649756885159}',p={},e=t(`<p>The <code>IRedisClient</code> APIs for <a href="http://redis.io/commands/eval" target="_blank" rel="noopener noreferrer">redis server-side LUA support</a> have been re-factored into the more user-friendly APIs below:</p><div class="language-csharp"><pre><code><span class="token keyword">public</span> <span class="token keyword">interface</span> <span class="token class-name">IRedisClient</span> 
<span class="token punctuation">{</span>
    <span class="token comment">//Eval/Lua operations </span>
    <span class="token return-type class-name">T</span> <span class="token generic-method"><span class="token function">ExecCachedLua</span><span class="token generic class-name"><span class="token punctuation">&lt;</span>T<span class="token punctuation">&gt;</span></span></span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> scriptBody<span class="token punctuation">,</span> <span class="token class-name">Func<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> T<span class="token punctuation">&gt;</span></span> scriptSha1<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token return-type class-name">RedisText</span> <span class="token function">ExecLua</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> body<span class="token punctuation">,</span> <span class="token keyword">params</span> <span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token return-type class-name">RedisText</span> <span class="token function">ExecLua</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> luaBody<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> keys<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token return-type class-name">RedisText</span> <span class="token function">ExecLuaSha</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> sha1<span class="token punctuation">,</span> <span class="token keyword">params</span> <span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token return-type class-name">RedisText</span> <span class="token function">ExecLuaSha</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> sha1<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> keys<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token return-type class-name"><span class="token keyword">string</span></span> <span class="token function">ExecLuaAsString</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> luaBody<span class="token punctuation">,</span> <span class="token keyword">params</span> <span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token return-type class-name"><span class="token keyword">string</span></span> <span class="token function">ExecLuaAsString</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> luaBody<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> keys<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token return-type class-name"><span class="token keyword">string</span></span> <span class="token function">ExecLuaShaAsString</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> sha1<span class="token punctuation">,</span> <span class="token keyword">params</span> <span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token return-type class-name"><span class="token keyword">string</span></span> <span class="token function">ExecLuaShaAsString</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> sha1<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> keys<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token return-type class-name"><span class="token keyword">int</span></span> <span class="token function">ExecLuaAsInt</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> luaBody<span class="token punctuation">,</span> <span class="token keyword">params</span> <span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token return-type class-name"><span class="token keyword">int</span></span> <span class="token function">ExecLuaAsInt</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> luaBody<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> keys<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token return-type class-name"><span class="token keyword">int</span></span> <span class="token function">ExecLuaShaAsInt</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> sha1<span class="token punctuation">,</span> <span class="token keyword">params</span> <span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token return-type class-name"><span class="token keyword">int</span></span> <span class="token function">ExecLuaShaAsInt</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> sha1<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> keys<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token return-type class-name">List<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span></span> <span class="token function">ExecLuaAsList</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> luaBody<span class="token punctuation">,</span> <span class="token keyword">params</span> <span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token return-type class-name">List<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span></span> <span class="token function">ExecLuaAsList</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> luaBody<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> keys<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token return-type class-name">List<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span></span> <span class="token function">ExecLuaShaAsList</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> sha1<span class="token punctuation">,</span> <span class="token keyword">params</span> <span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token return-type class-name">List<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span></span> <span class="token function">ExecLuaShaAsList</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> sha1<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> keys<span class="token punctuation">,</span> <span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> args<span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token return-type class-name"><span class="token keyword">string</span></span> <span class="token function">CalculateSha1</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> luaBody<span class="token punctuation">)</span><span class="token punctuation">;</span>
    
    <span class="token return-type class-name"><span class="token keyword">bool</span></span> <span class="token function">HasLuaScript</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> sha1Ref<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token return-type class-name">Dictionary<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">,</span> <span class="token keyword">bool</span><span class="token punctuation">&gt;</span></span> <span class="token function">WhichLuaScriptsExists</span><span class="token punctuation">(</span><span class="token keyword">params</span> <span class="token class-name"><span class="token keyword">string</span><span class="token punctuation">[</span><span class="token punctuation">]</span></span> sha1Refs<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">RemoveAllLuaScripts</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">KillRunningLuaScript</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token return-type class-name"><span class="token keyword">string</span></span> <span class="token function">LoadLuaScript</span><span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">string</span></span> body<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h3 id="efficient-scan-in-lua" tabindex="-1">Efficient SCAN in LUA <a class="header-anchor" href="#efficient-scan-in-lua" aria-hidden="true">#</a></h3><p>The C# API below returns the first 10 results matching the <code>key:*</code> pattern:</p><div class="language-csharp"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> keys <span class="token operator">=</span> Redis<span class="token punctuation">.</span><span class="token function">ScanAllKeys</span><span class="token punctuation">(</span><span class="token named-parameter punctuation">pattern</span><span class="token punctuation">:</span> <span class="token string">&quot;key:*&quot;</span><span class="token punctuation">,</span> <span class="token named-parameter punctuation">pageSize</span><span class="token punctuation">:</span> <span class="token number">10</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">Take</span><span class="token punctuation">(</span><span class="token number">10</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>However the C# Streaming API above requires an unknown number of Redis Operations (bounded to the number of keys in Redis) to complete the request. The number of SCAN calls can be reduced by choosing a higher <code>pageSize</code> to tell Redis to scan more keys each time the SCAN operation is called.</p><p>As the number of API calls has the potential to result in a large number of Redis Operations, it can end up yielding an unacceptable delay due to the latency of multiple dependent remote network calls. An easy solution is to instead have the multiple SCAN calls performed in-process on the Redis Server, eliminating the network latency of multiple SCAN calls, e.g:</p><div class="language-csharp"><pre><code><span class="token keyword">const</span> <span class="token class-name"><span class="token keyword">string</span></span> FastScanScript <span class="token operator">=</span> <span class="token string">@&quot;
local limit = tonumber(ARGV[2])
local pattern = ARGV[1]
local cursor = 0
local len = 0
local results = {}
repeat
    local r = redis.call(&#39;scan&#39;, cursor, &#39;MATCH&#39;, pattern, &#39;COUNT&#39;, limit)
    cursor = tonumber(r[1])
    for k,v in ipairs(r[2]) do
        table.insert(results, v)
        len = len + 1
        if len == limit then break end
    end
until cursor == 0 or len == limit
return results&quot;</span><span class="token punctuation">;</span>

<span class="token class-name">RedisText</span> r <span class="token operator">=</span> redis<span class="token punctuation">.</span><span class="token function">ExecLua</span><span class="token punctuation">(</span>FastScanScript<span class="token punctuation">,</span> <span class="token string">&quot;key:*&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;10&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
r<span class="token punctuation">.</span>Children<span class="token punctuation">.</span>Count<span class="token punctuation">.</span><span class="token function">Print</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token comment">//= 10</span>
</code></pre></div><p>The <code>ExecLua</code> API returns this complex LUA table response in the <code>Children</code> collection of the <code>RedisText</code> Response.</p><h4 id="alternative-complex-api-response" tabindex="-1">Alternative Complex API Response <a class="header-anchor" href="#alternative-complex-api-response" aria-hidden="true">#</a></h4><p>Another way to return complex data structures in a LUA operation is to serialize the result as JSON</p><div class="language-lua"><pre><code><span class="token keyword">return</span> cjson<span class="token punctuation">.</span><span class="token function">encode</span><span class="token punctuation">(</span>results<span class="token punctuation">)</span>
</code></pre></div><p>Which you can access as raw JSON by parsing the response as a String with:</p><div class="language-csharp"><pre><code><span class="token class-name"><span class="token keyword">string</span></span> json <span class="token operator">=</span> redis<span class="token punctuation">.</span><span class="token function">ExecLuaAsString</span><span class="token punctuation">(</span>FastScanScript<span class="token punctuation">,</span> <span class="token string">&quot;key:*&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;10&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><div class="info custom-block"><p class="custom-block-title">INFO</p><p>This is also the approach used in Redis React&#39;s <a href="https://github.com/ServiceStackApps/RedisReact/blob/a1b66603d52d2f18b96227fc455ecb5323e424c8/src/RedisReact/RedisReact.ServiceInterface/RedisServices.cs#L60" target="_blank" rel="noopener noreferrer">RedisServices</a>.</p></div><h3 id="execcachedlua" tabindex="-1">ExecCachedLua <a class="header-anchor" href="#execcachedlua" aria-hidden="true">#</a></h3><p>ExecCachedLua is a convenient high-level API that eliminates the bookkeeping required for executing high-performance server LUA Scripts which suffers from many of the problems that RDBMS stored procedures have which depends on pre-existing state in the RDBMS that needs to be updated with the latest version of the Stored Procedure.</p><p>With Redis LUA you either have the option to send, parse, load then execute the entire LUA script each time it&#39;s called or alternatively you could pre-load the LUA Script into Redis once on StartUp and then execute it using the Script&#39;s SHA1 hash. The issue with this is that if the Redis server is accidentally flushed you&#39;re left with a broken application relying on a pre-existing script that&#39;s no longer there. The new <code>ExecCachedLua</code> API provides the best of both worlds where it will always execute the compiled SHA1 script, saving bandwidth and CPU but will also re-create the LUA Script if it no longer exists.</p><p>You can instead execute the compiled LUA script above by its SHA1 identifier, which continues to work regardless if it never existed or was removed at runtime, e.g:</p><div class="language-csharp"><pre><code><span class="token comment">// #1: Loads LUA script and caches SHA1 hash in Redis Client</span>
r <span class="token operator">=</span> redis<span class="token punctuation">.</span><span class="token function">ExecCachedLua</span><span class="token punctuation">(</span>FastScanScript<span class="token punctuation">,</span> sha1 <span class="token operator">=&gt;</span>
    redis<span class="token punctuation">.</span><span class="token function">ExecLuaSha</span><span class="token punctuation">(</span>sha1<span class="token punctuation">,</span> <span class="token string">&quot;key:*&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;10&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// #2: Executes using cached SHA1 hash</span>
r <span class="token operator">=</span> redis<span class="token punctuation">.</span><span class="token function">ExecCachedLua</span><span class="token punctuation">(</span>FastScanScript<span class="token punctuation">,</span> sha1 <span class="token operator">=&gt;</span>
    redis<span class="token punctuation">.</span><span class="token function">ExecLuaSha</span><span class="token punctuation">(</span>sha1<span class="token punctuation">,</span> <span class="token string">&quot;key:*&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;10&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// Deletes all existing compiled LUA scripts </span>
redis<span class="token punctuation">.</span><span class="token function">ScriptFlush</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">// #3: Executes using cached SHA1 hash, gets NOSCRIPT Error, </span>
<span class="token comment">//     re-creates then re-executes the LUA script using its SHA1 hash</span>
r <span class="token operator">=</span> redis<span class="token punctuation">.</span><span class="token function">ExecCachedLua</span><span class="token punctuation">(</span>FastScanScript<span class="token punctuation">,</span> sha1 <span class="token operator">=&gt;</span>
    redis<span class="token punctuation">.</span><span class="token function">ExecLuaSha</span><span class="token punctuation">(</span>sha1<span class="token punctuation">,</span> <span class="token string">&quot;key:*&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;10&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><h3 id="usage-examples" tabindex="-1">Usage Examples <a class="header-anchor" href="#usage-examples" aria-hidden="true">#</a></h3><p>Here&#39;s how you can implement a <strong>ZPOP</strong> in Lua to remove the items with the lowest rank from a sorted set:</p><div class="language-csharp"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> luaBody <span class="token operator">=</span> <span class="token string">@&quot;
    local val = redis.call(&#39;zrange&#39;, KEYS[1], 0, ARGV[1]-1)
    if val then redis.call(&#39;zremrangebyrank&#39;, KEYS[1], 0, ARGV[1]-1) end
    return val&quot;</span><span class="token punctuation">;</span>

<span class="token class-name"><span class="token keyword">var</span></span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> alphabet <span class="token operator">=</span> <span class="token number">26</span><span class="token punctuation">.</span><span class="token function">Times</span><span class="token punctuation">(</span>c <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token string character">&#39;A&#39;</span> <span class="token operator">+</span> c<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
alphabet<span class="token punctuation">.</span><span class="token function">ForEach</span><span class="token punctuation">(</span>x <span class="token operator">=&gt;</span> Redis<span class="token punctuation">.</span><span class="token function">AddItemToSortedSet</span><span class="token punctuation">(</span><span class="token string">&quot;zalphabet&quot;</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//Remove the letters with the lowest rank from the sorted set &#39;zalphabet&#39;</span>
<span class="token class-name"><span class="token keyword">var</span></span> letters <span class="token operator">=</span> Redis<span class="token punctuation">.</span><span class="token function">ExecLuaAsList</span><span class="token punctuation">(</span>luaBody<span class="token punctuation">,</span> <span class="token named-parameter punctuation">keys</span><span class="token punctuation">:</span> <span class="token keyword">new</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token string">&quot;zalphabet&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token named-parameter punctuation">args</span><span class="token punctuation">:</span> <span class="token keyword">new</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token string">&quot;3&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
letters<span class="token punctuation">.</span><span class="token function">PrintDump</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[A, B, C]</span>
</code></pre></div><p>And how to implement <strong>ZREVPOP</strong> to remove items with the highest rank from a sorted set:</p><div class="language-csharp"><pre><code><span class="token class-name"><span class="token keyword">var</span></span> luaBody <span class="token operator">=</span> <span class="token string">@&quot;
    local val = redis.call(&#39;zrange&#39;, KEYS[1], -ARGV[1], -1)
    if val then redis.call(&#39;zremrangebyrank&#39;, KEYS[1], -ARGV[1], -1) end
    return val&quot;</span><span class="token punctuation">;</span>

<span class="token class-name"><span class="token keyword">var</span></span> i <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
<span class="token class-name"><span class="token keyword">var</span></span> alphabet <span class="token operator">=</span> <span class="token number">26</span><span class="token punctuation">.</span><span class="token function">Times</span><span class="token punctuation">(</span>c <span class="token operator">=&gt;</span> <span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token keyword">char</span><span class="token punctuation">)</span><span class="token punctuation">(</span><span class="token string character">&#39;A&#39;</span> <span class="token operator">+</span> c<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToString</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
alphabet<span class="token punctuation">.</span><span class="token function">ForEach</span><span class="token punctuation">(</span>x <span class="token operator">=&gt;</span> Redis<span class="token punctuation">.</span><span class="token function">AddItemToSortedSet</span><span class="token punctuation">(</span><span class="token string">&quot;zalphabet&quot;</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> i<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token comment">//Remove the letters with the highest rank from the sorted set &#39;zalphabet&#39;</span>
<span class="token class-name">List<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span></span> letters <span class="token operator">=</span> Redis<span class="token punctuation">.</span><span class="token function">ExecLuaAsList</span><span class="token punctuation">(</span>luaBody<span class="token punctuation">,</span> 
    <span class="token named-parameter punctuation">keys</span><span class="token punctuation">:</span> <span class="token keyword">new</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token string">&quot;zalphabet&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token named-parameter punctuation">args</span><span class="token punctuation">:</span> <span class="token keyword">new</span><span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token punctuation">{</span> <span class="token string">&quot;3&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

letters<span class="token punctuation">.</span><span class="token function">PrintDump</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[X, Y, Z]</span>
</code></pre></div><h3 id="other-examples" tabindex="-1">Other examples <a class="header-anchor" href="#other-examples" aria-hidden="true">#</a></h3><p>Returning an <code>int</code>:</p><div class="language-csharp"><pre><code><span class="token class-name"><span class="token keyword">int</span></span> intVal <span class="token operator">=</span> Redis<span class="token punctuation">.</span><span class="token function">ExecLuaAsInt</span><span class="token punctuation">(</span><span class="token string">&quot;return 123&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//123</span>
<span class="token class-name"><span class="token keyword">int</span></span> intVal <span class="token operator">=</span> Redis<span class="token punctuation">.</span><span class="token function">ExecLuaAsInt</span><span class="token punctuation">(</span><span class="token string">&quot;return ARGV[1] + ARGV[2]&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;10&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;20&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//30</span>
</code></pre></div><p>Returning an <code>string</code>:</p><div class="language-csharp"><pre><code><span class="token comment">//Hello, Redis Lua!</span>
<span class="token class-name"><span class="token keyword">var</span></span> strVal <span class="token operator">=</span> Redis<span class="token punctuation">.</span><span class="token function">ExecLuaAsString</span><span class="token punctuation">(</span><span class="token string">@&quot;return &#39;Hello, &#39; .. ARGV[1] .. &#39;!&#39;&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Redis Lua&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre></div><p>Returning a <code>List</code> of strings:</p><div class="language-csharp"><pre><code>Enum<span class="token punctuation">.</span><span class="token function">GetNames</span><span class="token punctuation">(</span><span class="token keyword">typeof</span><span class="token punctuation">(</span><span class="token type-expression class-name">DayOfWeek</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">ToList</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token function">ForEach</span><span class="token punctuation">(</span>x <span class="token operator">=&gt;</span> Redis<span class="token punctuation">.</span><span class="token function">AddItemToList</span><span class="token punctuation">(</span><span class="token string">&quot;DaysOfWeek&quot;</span><span class="token punctuation">,</span> x<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

<span class="token class-name"><span class="token keyword">var</span></span> daysOfWeek <span class="token operator">=</span> Redis<span class="token punctuation">.</span><span class="token function">ExecLuaAsList</span><span class="token punctuation">(</span><span class="token string">&quot;return redis.call(&#39;LRANGE&#39;, &#39;DaysOfWeek&#39;, 0, -1)&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
daysOfWeek<span class="token punctuation">.</span><span class="token function">PrintDump</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//[Sunday, Monday, Tuesday, ...]</span>
</code></pre></div><p>More examples can be found in the <a href="https://github.com/ServiceStack/ServiceStack.Redis/blob/master/tests/ServiceStack.Redis.Tests/RedisClientEvalTests.cs" target="_blank" rel="noopener noreferrer">Redis Eval Lua tests</a></p>`,33),o=[e];function c(l,u,i,k,r,d){return a(),s("div",null,o)}var g=n(p,[["render",c]]);export{m as __pageData,g as default};
