import{_ as n,c as s,o as a,a as t}from"./app.da189b1e.js";const g='{"title":"Redis Transactions","description":"","frontmatter":{"slug":"transactions","title":"Redis Transactions"},"headers":[{"level":2,"title":"How to create custom atomic operations in Redis","slug":"how-to-create-custom-atomic-operations-in-redis"},{"level":2,"title":"Redis Transaction Examples","slug":"redis-transaction-examples"},{"level":2,"title":"Other common examples","slug":"other-common-examples"},{"level":2,"title":"All-in-one example","slug":"all-in-one-example"}],"relativePath":"redis/transactions.md","lastUpdated":1649756885159}',p={},o=t(`<p>This page provides examples on how to create atomic Redis transactions with <a href="https://github.com/ServiceStack/ServiceStack.Redis" target="_blank" rel="noopener noreferrer">ServiceStackRedis Service Stack&#39;s C# Redis Client</a></p><h2 id="how-to-create-custom-atomic-operations-in-redis" tabindex="-1">How to create custom atomic operations in Redis <a class="header-anchor" href="#how-to-create-custom-atomic-operations-in-redis" aria-hidden="true">#</a></h2><p>One of the main features of Redis is the ability to construct custom atomic operations. This is achieved by utilizing Redis&#39;s <a href="https://redis.io/commands/multi" target="_blank" rel="noopener noreferrer">MULTI/EXEC/DISCARD</a> operations.</p><p><a href="https://github.com/ServiceStack/ServiceStack.Redis" target="_blank" rel="noopener noreferrer">ServiceStack&#39;s C# Redis Client</a> makes it easy to utilize Redis transactions by providing a strongly-typed <a href="./transactions.html">IRedisTransaction</a> (for strings) and <a href="./typed-transactions.html">IRedisTypedTransaction&lt;T&gt;</a> (for POCO types) APIs with convenience methods to allow you to combine any <a href="./client.html">IRedisClient</a> operation within a single transaction.</p><p>Creating a transaction is done by calling <code>IRedisClient.CreateTransaction()</code>. From there you &#39;Queue&#39; up all operations you want to be a part of the transaction by using one of the <code>IRedisTransaction.QueueCommand()</code> overloads. After that you can execute all the operations by calling <code>IRedisTransaction.Commit()</code> which will send the &#39;EXEC&#39; command to the Redis server executing all the Queued commands and processing their callbacks.</p><p>If you don&#39;t call the <code>Commit()</code> before the end of the using block, <code>Dispose()</code> method will automatically invokes <code>Rollback()</code> that will send the &#39;DISCARD&#39; command disposing of the current transaction and resetting the Redis client connection back to its previous state.</p><h2 id="redis-transaction-examples" tabindex="-1">Redis Transaction Examples <a class="header-anchor" href="#redis-transaction-examples" aria-hidden="true">#</a></h2><p>Below is a simple example showing how to queue up Redis operations with and without a callback.</p><div class="language-csharp"><pre><code><span class="token class-name"><span class="token keyword">int</span></span> callbackResult<span class="token punctuation">;</span>
<span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> trans <span class="token operator">=</span> redis<span class="token punctuation">.</span><span class="token function">CreateTransaction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
  trans<span class="token punctuation">.</span><span class="token function">QueueCommand</span><span class="token punctuation">(</span>r <span class="token operator">=&gt;</span> r<span class="token punctuation">.</span><span class="token function">Increment</span><span class="token punctuation">(</span><span class="token string">&quot;key&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
  trans<span class="token punctuation">.</span><span class="token function">QueueCommand</span><span class="token punctuation">(</span>r <span class="token operator">=&gt;</span> r<span class="token punctuation">.</span><span class="token function">Increment</span><span class="token punctuation">(</span><span class="token string">&quot;key&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> i <span class="token operator">=&gt;</span> callbackResult <span class="token operator">=</span> i<span class="token punctuation">)</span><span class="token punctuation">;</span>  

  trans<span class="token punctuation">.</span><span class="token function">Commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
<span class="token comment">//The value of &quot;key&quot; is incremented twice. The latest value of which is also stored in &#39;callbackResult&#39;.</span>

</code></pre></div><h2 id="other-common-examples" tabindex="-1">Other common examples <a class="header-anchor" href="#other-common-examples" aria-hidden="true">#</a></h2><p>The full-source code and other common examples can be found on the <a href="https://github.com/ServiceStack/ServiceStack.Redis/blob/master/tests/ServiceStack.Redis.Tests/RedisTransactionCommonTests.cs" target="_blank" rel="noopener noreferrer">common transaction tests page</a>.</p><div class="language-csharp"><pre><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Test</span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Can_Set_and_Expire_key_in_atomic_transaction</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">var</span></span> oneSec <span class="token operator">=</span> TimeSpan<span class="token punctuation">.</span><span class="token function">FromSeconds</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    Assert<span class="token punctuation">.</span><span class="token function">That</span><span class="token punctuation">(</span>Redis<span class="token punctuation">.</span><span class="token function">GetString</span><span class="token punctuation">(</span><span class="token string">&quot;key&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Is<span class="token punctuation">.</span>Null<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> trans <span class="token operator">=</span> Redis<span class="token punctuation">.</span><span class="token function">CreateTransaction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>                  <span class="token comment">//Calls &#39;MULTI&#39;</span>
    <span class="token punctuation">{</span>
        trans<span class="token punctuation">.</span><span class="token function">QueueCommand</span><span class="token punctuation">(</span>r <span class="token operator">=&gt;</span> r<span class="token punctuation">.</span><span class="token function">SetString</span><span class="token punctuation">(</span><span class="token string">&quot;key&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>      <span class="token comment">//Queues &#39;SET key a&#39;</span>
        trans<span class="token punctuation">.</span><span class="token function">QueueCommand</span><span class="token punctuation">(</span>r <span class="token operator">=&gt;</span> r<span class="token punctuation">.</span><span class="token function">ExpireKeyIn</span><span class="token punctuation">(</span><span class="token string">&quot;key&quot;</span><span class="token punctuation">,</span> oneSec<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">//Queues &#39;EXPIRE key 1&#39;</span>

        trans<span class="token punctuation">.</span><span class="token function">Commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>                                        <span class="token comment">//Calls &#39;EXEC&#39;</span>

    <span class="token punctuation">}</span>                                                              <span class="token comment">//Calls &#39;DISCARD&#39; if &#39;EXEC&#39; wasn&#39;t called</span>

    Assert<span class="token punctuation">.</span><span class="token function">That</span><span class="token punctuation">(</span>Redis<span class="token punctuation">.</span><span class="token function">GetString</span><span class="token punctuation">(</span><span class="token string">&quot;key&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Is<span class="token punctuation">.</span><span class="token function">EqualTo</span><span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    Thread<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>TimeSpan<span class="token punctuation">.</span><span class="token function">FromSeconds</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    Assert<span class="token punctuation">.</span><span class="token function">That</span><span class="token punctuation">(</span>Redis<span class="token punctuation">.</span><span class="token function">GetString</span><span class="token punctuation">(</span><span class="token string">&quot;key&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> Is<span class="token punctuation">.</span>Null<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Test</span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Can_Pop_priority_message_from_SortedSet_and_Add_to_workq_in_atomic_transaction</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">var</span></span> messages <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span> <span class="token string">&quot;message4&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;message3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;message2&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>

    Redis<span class="token punctuation">.</span><span class="token function">AddToList</span><span class="token punctuation">(</span><span class="token string">&quot;workq&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;message1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name"><span class="token keyword">var</span></span> priority <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    messages<span class="token punctuation">.</span><span class="token function">ForEach</span><span class="token punctuation">(</span>x <span class="token operator">=&gt;</span> Redis<span class="token punctuation">.</span><span class="token function">AddToSortedSet</span><span class="token punctuation">(</span><span class="token string">&quot;prioritymsgs&quot;</span><span class="token punctuation">,</span> x<span class="token punctuation">,</span> priority<span class="token operator">++</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token class-name"><span class="token keyword">var</span></span> highestPriorityMessage <span class="token operator">=</span> Redis<span class="token punctuation">.</span><span class="token function">PopFromSortedSetItemWithHighestScore</span><span class="token punctuation">(</span><span class="token string">&quot;prioritymsgs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> trans <span class="token operator">=</span> Redis<span class="token punctuation">.</span><span class="token function">CreateTransaction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        trans<span class="token punctuation">.</span><span class="token function">QueueCommand</span><span class="token punctuation">(</span>r <span class="token operator">=&gt;</span> r<span class="token punctuation">.</span><span class="token function">RemoveFromSortedSet</span><span class="token punctuation">(</span><span class="token string">&quot;prioritymsgs&quot;</span><span class="token punctuation">,</span> highestPriorityMessage<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        trans<span class="token punctuation">.</span><span class="token function">QueueCommand</span><span class="token punctuation">(</span>r <span class="token operator">=&gt;</span> r<span class="token punctuation">.</span><span class="token function">AddToList</span><span class="token punctuation">(</span><span class="token string">&quot;workq&quot;</span><span class="token punctuation">,</span> highestPriorityMessage<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>	

        trans<span class="token punctuation">.</span><span class="token function">Commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>											
    <span class="token punctuation">}</span>

    Assert<span class="token punctuation">.</span><span class="token function">That</span><span class="token punctuation">(</span>Redis<span class="token punctuation">.</span><span class="token function">GetAllFromList</span><span class="token punctuation">(</span><span class="token string">&quot;workq&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
        Is<span class="token punctuation">.</span><span class="token function">EquivalentTo</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span> <span class="token string">&quot;message1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;message2&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    Assert<span class="token punctuation">.</span><span class="token function">That</span><span class="token punctuation">(</span>Redis<span class="token punctuation">.</span><span class="token function">GetAllFromSortedSet</span><span class="token punctuation">(</span><span class="token string">&quot;prioritymsgs&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> 
        Is<span class="token punctuation">.</span><span class="token function">EquivalentTo</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span> <span class="token string">&quot;message3&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;message4&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div><h2 id="all-in-one-example" tabindex="-1">All-in-one example <a class="header-anchor" href="#all-in-one-example" aria-hidden="true">#</a></h2><p>This and other examples can be found by looking at the <a href="https://github.com/ServiceStack/ServiceStack.Redis/blob/master/tests/ServiceStack.Redis.Tests/RedisTransactionTests.cs" target="_blank" rel="noopener noreferrer">RedisTransactionTests.cs test suite</a>.</p><p>Here is an all-in-one examples combining different Redis operations within a single transaction:</p><div class="language-csharp"><pre><code><span class="token punctuation">[</span><span class="token attribute"><span class="token class-name">Test</span></span><span class="token punctuation">]</span>
<span class="token keyword">public</span> <span class="token return-type class-name"><span class="token keyword">void</span></span> <span class="token function">Supports_different_operation_types_in_same_transaction</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">{</span>
    <span class="token class-name"><span class="token keyword">var</span></span> incrementResults <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span><span class="token keyword">int</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name"><span class="token keyword">var</span></span> collectionCounts <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span><span class="token keyword">int</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name"><span class="token keyword">var</span></span> containsItem <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>

    Assert<span class="token punctuation">.</span><span class="token function">That</span><span class="token punctuation">(</span>Redis<span class="token punctuation">.</span><span class="token function">GetString</span><span class="token punctuation">(</span>Key<span class="token punctuation">)</span><span class="token punctuation">,</span> Is<span class="token punctuation">.</span>Null<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">using</span> <span class="token punctuation">(</span><span class="token class-name"><span class="token keyword">var</span></span> trans <span class="token operator">=</span> Redis<span class="token punctuation">.</span><span class="token function">CreateTransaction</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        trans<span class="token punctuation">.</span><span class="token function">QueueCommand</span><span class="token punctuation">(</span>r <span class="token operator">=&gt;</span> r<span class="token punctuation">.</span><span class="token function">Increment</span><span class="token punctuation">(</span>Key<span class="token punctuation">)</span><span class="token punctuation">,</span> intResult <span class="token operator">=&gt;</span> incrementResults<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>intResult<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        trans<span class="token punctuation">.</span><span class="token function">QueueCommand</span><span class="token punctuation">(</span>r <span class="token operator">=&gt;</span> r<span class="token punctuation">.</span><span class="token function">AddToList</span><span class="token punctuation">(</span>ListKey<span class="token punctuation">,</span> <span class="token string">&quot;listitem1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        trans<span class="token punctuation">.</span><span class="token function">QueueCommand</span><span class="token punctuation">(</span>r <span class="token operator">=&gt;</span> r<span class="token punctuation">.</span><span class="token function">AddToList</span><span class="token punctuation">(</span>ListKey<span class="token punctuation">,</span> <span class="token string">&quot;listitem2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        trans<span class="token punctuation">.</span><span class="token function">QueueCommand</span><span class="token punctuation">(</span>r <span class="token operator">=&gt;</span> r<span class="token punctuation">.</span><span class="token function">AddToSet</span><span class="token punctuation">(</span>SetKey<span class="token punctuation">,</span> <span class="token string">&quot;setitem&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        trans<span class="token punctuation">.</span><span class="token function">QueueCommand</span><span class="token punctuation">(</span>r <span class="token operator">=&gt;</span> r<span class="token punctuation">.</span><span class="token function">SetContainsValue</span><span class="token punctuation">(</span>SetKey<span class="token punctuation">,</span> <span class="token string">&quot;setitem&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> b <span class="token operator">=&gt;</span> containsItem <span class="token operator">=</span> b<span class="token punctuation">)</span><span class="token punctuation">;</span>
        trans<span class="token punctuation">.</span><span class="token function">QueueCommand</span><span class="token punctuation">(</span>r <span class="token operator">=&gt;</span> r<span class="token punctuation">.</span><span class="token function">AddToSortedSet</span><span class="token punctuation">(</span>SortedSetKey<span class="token punctuation">,</span> <span class="token string">&quot;sortedsetitem1&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        trans<span class="token punctuation">.</span><span class="token function">QueueCommand</span><span class="token punctuation">(</span>r <span class="token operator">=&gt;</span> r<span class="token punctuation">.</span><span class="token function">AddToSortedSet</span><span class="token punctuation">(</span>SortedSetKey<span class="token punctuation">,</span> <span class="token string">&quot;sortedsetitem2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        trans<span class="token punctuation">.</span><span class="token function">QueueCommand</span><span class="token punctuation">(</span>r <span class="token operator">=&gt;</span> r<span class="token punctuation">.</span><span class="token function">AddToSortedSet</span><span class="token punctuation">(</span>SortedSetKey<span class="token punctuation">,</span> <span class="token string">&quot;sortedsetitem3&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        trans<span class="token punctuation">.</span><span class="token function">QueueCommand</span><span class="token punctuation">(</span>r <span class="token operator">=&gt;</span> r<span class="token punctuation">.</span><span class="token function">GetListCount</span><span class="token punctuation">(</span>ListKey<span class="token punctuation">)</span><span class="token punctuation">,</span> intResult <span class="token operator">=&gt;</span> collectionCounts<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>intResult<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        trans<span class="token punctuation">.</span><span class="token function">QueueCommand</span><span class="token punctuation">(</span>r <span class="token operator">=&gt;</span> r<span class="token punctuation">.</span><span class="token function">GetSetCount</span><span class="token punctuation">(</span>SetKey<span class="token punctuation">)</span><span class="token punctuation">,</span> intResult <span class="token operator">=&gt;</span> collectionCounts<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>intResult<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        trans<span class="token punctuation">.</span><span class="token function">QueueCommand</span><span class="token punctuation">(</span>r <span class="token operator">=&gt;</span> r<span class="token punctuation">.</span><span class="token function">GetSortedSetCount</span><span class="token punctuation">(</span>SortedSetKey<span class="token punctuation">)</span><span class="token punctuation">,</span> intResult <span class="token operator">=&gt;</span> collectionCounts<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>intResult<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        trans<span class="token punctuation">.</span><span class="token function">QueueCommand</span><span class="token punctuation">(</span>r <span class="token operator">=&gt;</span> r<span class="token punctuation">.</span><span class="token function">Increment</span><span class="token punctuation">(</span>Key<span class="token punctuation">)</span><span class="token punctuation">,</span> intResult <span class="token operator">=&gt;</span> incrementResults<span class="token punctuation">.</span><span class="token function">Add</span><span class="token punctuation">(</span>intResult<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        trans<span class="token punctuation">.</span><span class="token function">Commit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    Assert<span class="token punctuation">.</span><span class="token function">That</span><span class="token punctuation">(</span>containsItem<span class="token punctuation">,</span> Is<span class="token punctuation">.</span>True<span class="token punctuation">)</span><span class="token punctuation">;</span>
    Assert<span class="token punctuation">.</span><span class="token function">That</span><span class="token punctuation">(</span>Redis<span class="token punctuation">.</span><span class="token function">GetString</span><span class="token punctuation">(</span>Key<span class="token punctuation">)</span><span class="token punctuation">,</span> Is<span class="token punctuation">.</span><span class="token function">EqualTo</span><span class="token punctuation">(</span><span class="token string">&quot;2&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    Assert<span class="token punctuation">.</span><span class="token function">That</span><span class="token punctuation">(</span>incrementResults<span class="token punctuation">,</span> Is<span class="token punctuation">.</span><span class="token function">EquivalentTo</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span><span class="token keyword">int</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    Assert<span class="token punctuation">.</span><span class="token function">That</span><span class="token punctuation">(</span>collectionCounts<span class="token punctuation">,</span> Is<span class="token punctuation">.</span><span class="token function">EquivalentTo</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span><span class="token keyword">int</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">3</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    Assert<span class="token punctuation">.</span><span class="token function">That</span><span class="token punctuation">(</span>Redis<span class="token punctuation">.</span><span class="token function">GetAllFromList</span><span class="token punctuation">(</span>ListKey<span class="token punctuation">)</span><span class="token punctuation">,</span> Is<span class="token punctuation">.</span><span class="token function">EquivalentTo</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span> <span class="token string">&quot;listitem1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;listitem2&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    Assert<span class="token punctuation">.</span><span class="token function">That</span><span class="token punctuation">(</span>Redis<span class="token punctuation">.</span><span class="token function">GetAllFromSet</span><span class="token punctuation">(</span>SetKey<span class="token punctuation">)</span><span class="token punctuation">,</span> Is<span class="token punctuation">.</span><span class="token function">EquivalentTo</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span> <span class="token string">&quot;setitem&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    Assert<span class="token punctuation">.</span><span class="token function">That</span><span class="token punctuation">(</span>Redis<span class="token punctuation">.</span><span class="token function">GetAllFromSortedSet</span><span class="token punctuation">(</span>SortedSetKey<span class="token punctuation">)</span><span class="token punctuation">,</span> Is<span class="token punctuation">.</span><span class="token function">EquivalentTo</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token constructor-invocation class-name">List<span class="token punctuation">&lt;</span><span class="token keyword">string</span><span class="token punctuation">&gt;</span></span> <span class="token punctuation">{</span> <span class="token string">&quot;sortedsetitem1&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;sortedsetitem2&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;sortedsetitem3&quot;</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre></div>`,16),e=[o];function c(u,i,l,k,r,d){return a(),s("div",null,e)}var f=n(p,[["render",c]]);export{g as __pageData,f as default};
