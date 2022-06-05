"use strict";(self.webpackChunkvp=self.webpackChunkvp||[]).push([[51409],{99839:(t,e,o)=>{o.r(e),o.d(e,{data:()=>i});const i={key:"v-eabd6c86",path:"/devices/SBM300Z6.html",title:"ShinaSystem SBM300Z6 control via MQTT",lang:"en-US",frontmatter:{title:"ShinaSystem SBM300Z6 control via MQTT",description:"Integrate your ShinaSystem SBM300Z6 via Zigbee2MQTT with whatever smart home infrastructure you are using without the vendor's bridge or gateway.",addedAt:"2021-10-30T12:58:50.000Z",pageClass:"device-page"},excerpt:"",headers:[{level:2,title:"Exposes",slug:"exposes",children:[{level:3,title:"Switch (top_left endpoint)",slug:"switch-top-left-endpoint",children:[]},{level:3,title:"Switch (bottom_left endpoint)",slug:"switch-bottom-left-endpoint",children:[]},{level:3,title:"Switch (center_left endpoint)",slug:"switch-center-left-endpoint",children:[]},{level:3,title:"Switch (center_right endpoint)",slug:"switch-center-right-endpoint",children:[]},{level:3,title:"Switch (top_right endpoint)",slug:"switch-top-right-endpoint",children:[]},{level:3,title:"Switch (bottom_right endpoint)",slug:"switch-bottom-right-endpoint",children:[]},{level:3,title:"Linkquality (numeric)",slug:"linkquality-numeric",children:[]}]}],filePathRelative:"devices/SBM300Z6.md",git:{updatedTime:1654459291e3}}},18393:(t,e,o)=>{o.r(e),o.d(e,{default:()=>c});const i=(0,o(66252).uE)('<h1 id="shinasystem-sbm300z6" tabindex="-1"><a class="header-anchor" href="#shinasystem-sbm300z6" aria-hidden="true">#</a> ShinaSystem SBM300Z6</h1><table><thead><tr><th></th><th></th></tr></thead><tbody><tr><td>Model</td><td>SBM300Z6</td></tr><tr><td>Vendor</td><td>ShinaSystem</td></tr><tr><td>Description</td><td>SiHAS IOT smart switch 6 gang</td></tr><tr><td>Exposes</td><td>switch (state), linkquality</td></tr><tr><td>Picture</td><td><img src="https://www.zigbee2mqtt.io/images/devices/SBM300Z6.jpg" alt="ShinaSystem SBM300Z6"></td></tr></tbody></table><h2 id="exposes" tabindex="-1"><a class="header-anchor" href="#exposes" aria-hidden="true">#</a> Exposes</h2><h3 id="switch-top-left-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-top-left-endpoint" aria-hidden="true">#</a> Switch (top_left endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_top_left</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_top_left&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_top_left&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_top_left&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_top_left&quot;: &quot;&quot;}</code>.</p><h3 id="switch-bottom-left-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-bottom-left-endpoint" aria-hidden="true">#</a> Switch (bottom_left endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_bottom_left</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_bottom_left&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_bottom_left&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_bottom_left&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_bottom_left&quot;: &quot;&quot;}</code>.</p><h3 id="switch-center-left-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-center-left-endpoint" aria-hidden="true">#</a> Switch (center_left endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_center_left</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_center_left&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_center_left&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_center_left&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_center_left&quot;: &quot;&quot;}</code>.</p><h3 id="switch-center-right-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-center-right-endpoint" aria-hidden="true">#</a> Switch (center_right endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_center_right</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_center_right&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_center_right&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_center_right&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_center_right&quot;: &quot;&quot;}</code>.</p><h3 id="switch-top-right-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-top-right-endpoint" aria-hidden="true">#</a> Switch (top_right endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_top_right</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_top_right&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_top_right&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_top_right&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_top_right&quot;: &quot;&quot;}</code>.</p><h3 id="switch-bottom-right-endpoint" tabindex="-1"><a class="header-anchor" href="#switch-bottom-right-endpoint" aria-hidden="true">#</a> Switch (bottom_right endpoint)</h3><p>The current state of this switch is in the published state under the <code>state_bottom_right</code> property (value is <code>ON</code> or <code>OFF</code>). To control this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/set</code> with payload <code>{&quot;state_bottom_right&quot;: &quot;ON&quot;}</code>, <code>{&quot;state_bottom_right&quot;: &quot;OFF&quot;}</code> or <code>{&quot;state_bottom_right&quot;: &quot;TOGGLE&quot;}</code>. To read the current state of this switch publish a message to topic <code>zigbee2mqtt/FRIENDLY_NAME/get</code> with payload <code>{&quot;state_bottom_right&quot;: &quot;&quot;}</code>.</p><h3 id="linkquality-numeric" tabindex="-1"><a class="header-anchor" href="#linkquality-numeric" aria-hidden="true">#</a> Linkquality (numeric)</h3><p>Link quality (signal strength). Value can be found in the published state on the <code>linkquality</code> property. It&#39;s not possible to read (<code>/get</code>) or write (<code>/set</code>) this value. The minimal value is <code>0</code> and the maximum value is <code>255</code>. The unit of this value is <code>lqi</code>.</p>',17),d={},c=(0,o(83744).Z)(d,[["render",function(t,e){return i}]])},83744:(t,e)=>{e.Z=(t,e)=>{for(const[o,i]of e)t[o]=i;return t}}}]);