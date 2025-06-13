(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))o(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}})();/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var G;(function(e){e.HARM_CATEGORY_UNSPECIFIED="HARM_CATEGORY_UNSPECIFIED",e.HARM_CATEGORY_HATE_SPEECH="HARM_CATEGORY_HATE_SPEECH",e.HARM_CATEGORY_SEXUALLY_EXPLICIT="HARM_CATEGORY_SEXUALLY_EXPLICIT",e.HARM_CATEGORY_HARASSMENT="HARM_CATEGORY_HARASSMENT",e.HARM_CATEGORY_DANGEROUS_CONTENT="HARM_CATEGORY_DANGEROUS_CONTENT"})(G||(G={}));var H;(function(e){e.HARM_BLOCK_THRESHOLD_UNSPECIFIED="HARM_BLOCK_THRESHOLD_UNSPECIFIED",e.BLOCK_LOW_AND_ABOVE="BLOCK_LOW_AND_ABOVE",e.BLOCK_MEDIUM_AND_ABOVE="BLOCK_MEDIUM_AND_ABOVE",e.BLOCK_ONLY_HIGH="BLOCK_ONLY_HIGH",e.BLOCK_NONE="BLOCK_NONE"})(H||(H={}));var P;(function(e){e.HARM_PROBABILITY_UNSPECIFIED="HARM_PROBABILITY_UNSPECIFIED",e.NEGLIGIBLE="NEGLIGIBLE",e.LOW="LOW",e.MEDIUM="MEDIUM",e.HIGH="HIGH"})(P||(P={}));var D;(function(e){e.BLOCKED_REASON_UNSPECIFIED="BLOCKED_REASON_UNSPECIFIED",e.SAFETY="SAFETY",e.OTHER="OTHER"})(D||(D={}));var I;(function(e){e.FINISH_REASON_UNSPECIFIED="FINISH_REASON_UNSPECIFIED",e.STOP="STOP",e.MAX_TOKENS="MAX_TOKENS",e.SAFETY="SAFETY",e.RECITATION="RECITATION",e.OTHER="OTHER"})(I||(I={}));var K;(function(e){e.TASK_TYPE_UNSPECIFIED="TASK_TYPE_UNSPECIFIED",e.RETRIEVAL_QUERY="RETRIEVAL_QUERY",e.RETRIEVAL_DOCUMENT="RETRIEVAL_DOCUMENT",e.SEMANTIC_SIMILARITY="SEMANTIC_SIMILARITY",e.CLASSIFICATION="CLASSIFICATION",e.CLUSTERING="CLUSTERING"})(K||(K={}));/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _ extends Error{constructor(t){super(`[GoogleGenerativeAI Error]: ${t}`)}}class x extends _{constructor(t,n){super(t),this.response=n}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q="https://generativelanguage.googleapis.com",Z="v1",ee="0.2.1",te="genai-js";var g;(function(e){e.GENERATE_CONTENT="generateContent",e.STREAM_GENERATE_CONTENT="streamGenerateContent",e.COUNT_TOKENS="countTokens",e.EMBED_CONTENT="embedContent",e.BATCH_EMBED_CONTENTS="batchEmbedContents"})(g||(g={}));class S{constructor(t,n,o,s){this.model=t,this.task=n,this.apiKey=o,this.stream=s}toString(){let t=`${Q}/${Z}/${this.model}:${this.task}`;return this.stream&&(t+="?alt=sse"),t}}function ne(){return`${te}/${ee}`}async function O(e,t,n){let o;try{if(o=await fetch(e.toString(),Object.assign(Object.assign({},se(n)),{method:"POST",headers:{"Content-Type":"application/json","x-goog-api-client":ne(),"x-goog-api-key":e.apiKey},body:t})),!o.ok){let s="";try{const i=await o.json();s=i.error.message,i.error.details&&(s+=` ${JSON.stringify(i.error.details)}`)}catch{}throw new Error(`[${o.status} ${o.statusText}] ${s}`)}}catch(s){const i=new _(`Error fetching from ${e.toString()}: ${s.message}`);throw i.stack=s.stack,i}return o}function se(e){const t={};if((e==null?void 0:e.timeout)>=0){const n=new AbortController,o=n.signal;setTimeout(()=>n.abort(),e.timeout),t.signal=o}return t}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function v(e){return e.text=()=>{if(e.candidates&&e.candidates.length>0){if(e.candidates.length>1&&console.warn(`This response had ${e.candidates.length} candidates. Returning text from the first candidate only. Access response.candidates directly to use the other candidates.`),B(e.candidates[0]))throw new x(`${R(e)}`,e);return oe(e)}else if(e.promptFeedback)throw new x(`Text not available. ${R(e)}`,e);return""},e}function oe(e){var t,n,o,s;return!((s=(o=(n=(t=e.candidates)===null||t===void 0?void 0:t[0].content)===null||n===void 0?void 0:n.parts)===null||o===void 0?void 0:o[0])===null||s===void 0)&&s.text?e.candidates[0].content.parts[0].text:""}const ie=[I.RECITATION,I.SAFETY];function B(e){return!!e.finishReason&&ie.includes(e.finishReason)}function R(e){var t,n,o;let s="";if((!e.candidates||e.candidates.length===0)&&e.promptFeedback)s+="Response was blocked",!((t=e.promptFeedback)===null||t===void 0)&&t.blockReason&&(s+=` due to ${e.promptFeedback.blockReason}`),!((n=e.promptFeedback)===null||n===void 0)&&n.blockReasonMessage&&(s+=`: ${e.promptFeedback.blockReasonMessage}`);else if(!((o=e.candidates)===null||o===void 0)&&o[0]){const i=e.candidates[0];B(i)&&(s+=`Candidate was blocked due to ${i.finishReason}`,i.finishMessage&&(s+=`: ${i.finishMessage}`))}return s}function C(e){return this instanceof C?(this.v=e,this):new C(e)}function re(e,t,n){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var o=n.apply(e,t||[]),s,i=[];return s={},a("next"),a("throw"),a("return"),s[Symbol.asyncIterator]=function(){return this},s;function a(l){o[l]&&(s[l]=function(m){return new Promise(function(A,z){i.push([l,m,A,z])>1||r(l,m)})})}function r(l,m){try{c(o[l](m))}catch(A){L(i[0][3],A)}}function c(l){l.value instanceof C?Promise.resolve(l.value.v).then(h,M):L(i[0][2],l)}function h(l){r("next",l)}function M(l){r("throw",l)}function L(l,m){l(m),i.shift(),i.length&&r(i[0][0],i[0][1])}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k=/^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;function ae(e){const t=e.body.pipeThrough(new TextDecoderStream("utf8",{fatal:!0})),n=le(t),[o,s]=n.tee();return{stream:de(o),response:ce(s)}}async function ce(e){const t=[],n=e.getReader();for(;;){const{done:o,value:s}=await n.read();if(o)return v(ue(t));t.push(s)}}function de(e){return re(this,arguments,function*(){const n=e.getReader();for(;;){const{value:o,done:s}=yield C(n.read());if(s)break;yield yield C(v(o))}})}function le(e){const t=e.getReader();return new ReadableStream({start(o){let s="";return i();function i(){return t.read().then(({value:a,done:r})=>{if(r){if(s.trim()){o.error(new _("Failed to parse stream"));return}o.close();return}s+=a;let c=s.match(k),h;for(;c;){try{h=JSON.parse(c[1])}catch{o.error(new _(`Error parsing JSON response: "${c[1]}"`));return}o.enqueue(h),s=s.substring(c[0].length),c=s.match(k)}return i()})}}})}function ue(e){const t=e[e.length-1],n={promptFeedback:t==null?void 0:t.promptFeedback};for(const o of e)if(o.candidates)for(const s of o.candidates){const i=s.index;if(n.candidates||(n.candidates=[]),n.candidates[i]||(n.candidates[i]={index:s.index}),n.candidates[i].citationMetadata=s.citationMetadata,n.candidates[i].finishReason=s.finishReason,n.candidates[i].finishMessage=s.finishMessage,n.candidates[i].safetyRatings=s.safetyRatings,s.content&&s.content.parts){n.candidates[i].content||(n.candidates[i].content={role:s.content.role||"user",parts:[{text:""}]});for(const a of s.content.parts)a.text&&(n.candidates[i].content.parts[0].text+=a.text)}}return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y(e,t,n,o){const s=new S(t,g.STREAM_GENERATE_CONTENT,e,!0),i=await O(s,JSON.stringify(n),o);return ae(i)}async function $(e,t,n,o){const s=new S(t,g.GENERATE_CONTENT,e,!1),a=await(await O(s,JSON.stringify(n),o)).json();return{response:v(a)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function p(e,t){let n=[];if(typeof e=="string")n=[{text:e}];else for(const o of e)typeof o=="string"?n.push({text:o}):n.push(o);return{role:t,parts:n}}function N(e){return e.contents?e:{contents:[p(e,"user")]}}function he(e){return typeof e=="string"||Array.isArray(e)?{content:p(e,"user")}:e}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const U="SILENT_ERROR";class fe{constructor(t,n,o,s){this.model=n,this.params=o,this.requestOptions=s,this._history=[],this._sendPromise=Promise.resolve(),this._apiKey=t,o!=null&&o.history&&(this._history=o.history.map(i=>{if(!i.role)throw new Error("Missing role for history item: "+JSON.stringify(i));return p(i.parts,i.role)}))}async getHistory(){return await this._sendPromise,this._history}async sendMessage(t){var n,o;await this._sendPromise;const s=p(t,"user"),i={safetySettings:(n=this.params)===null||n===void 0?void 0:n.safetySettings,generationConfig:(o=this.params)===null||o===void 0?void 0:o.generationConfig,contents:[...this._history,s]};let a;return this._sendPromise=this._sendPromise.then(()=>$(this._apiKey,this.model,i,this.requestOptions)).then(r=>{var c;if(r.response.candidates&&r.response.candidates.length>0){this._history.push(s);const h=Object.assign({parts:[],role:"model"},(c=r.response.candidates)===null||c===void 0?void 0:c[0].content);this._history.push(h)}else{const h=R(r.response);h&&console.warn(`sendMessage() was unsuccessful. ${h}. Inspect response object for details.`)}a=r}),await this._sendPromise,a}async sendMessageStream(t){var n,o;await this._sendPromise;const s=p(t,"user"),i={safetySettings:(n=this.params)===null||n===void 0?void 0:n.safetySettings,generationConfig:(o=this.params)===null||o===void 0?void 0:o.generationConfig,contents:[...this._history,s]},a=Y(this._apiKey,this.model,i,this.requestOptions);return this._sendPromise=this._sendPromise.then(()=>a).catch(r=>{throw new Error(U)}).then(r=>r.response).then(r=>{if(r.candidates&&r.candidates.length>0){this._history.push(s);const c=Object.assign({},r.candidates[0].content);c.role||(c.role="model"),this._history.push(c)}else{const c=R(r);c&&console.warn(`sendMessageStream() was unsuccessful. ${c}. Inspect response object for details.`)}}).catch(r=>{r.message!==U&&console.error(r)}),a}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ge(e,t,n,o){const s=new S(t,g.COUNT_TOKENS,e,!1);return(await O(s,JSON.stringify(Object.assign(Object.assign({},n),{model:t})),o)).json()}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function me(e,t,n,o){const s=new S(t,g.EMBED_CONTENT,e,!1);return(await O(s,JSON.stringify(n),o)).json()}async function Ee(e,t,n,o){const s=new S(t,g.BATCH_EMBED_CONTENTS,e,!1),i=n.requests.map(r=>Object.assign(Object.assign({},r),{model:t}));return(await O(s,JSON.stringify({requests:i}),o)).json()}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pe{constructor(t,n,o){this.apiKey=t,n.model.includes("/")?this.model=n.model:this.model=`models/${n.model}`,this.generationConfig=n.generationConfig||{},this.safetySettings=n.safetySettings||[],this.requestOptions=o||{}}async generateContent(t){const n=N(t);return $(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings},n),this.requestOptions)}async generateContentStream(t){const n=N(t);return Y(this.apiKey,this.model,Object.assign({generationConfig:this.generationConfig,safetySettings:this.safetySettings},n),this.requestOptions)}startChat(t){return new fe(this.apiKey,this.model,t,this.requestOptions)}async countTokens(t){const n=N(t);return ge(this.apiKey,this.model,n)}async embedContent(t){const n=he(t);return me(this.apiKey,this.model,n)}async batchEmbedContents(t){return Ee(this.apiKey,this.model,t,this.requestOptions)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ye{constructor(t){this.apiKey=t}getGenerativeModel(t,n){if(!t.model)throw new _("Must provide a model name. Example: genai.getGenerativeModel({ model: 'my-model-name' })");return new pe(this.apiKey,t,n)}}const j=`imagine yourself as osaka from AZUMANANGA DAIOH.. introduce and you are going to help the user with cooking and everything related to it

so basically whatever the user wishes to make you are going to help him with the ingredients and how to do it.

keep your introduction and interaction concise and straightforward
give instructions in detail and clear for the user to understand clearly.

give a little bit of explanation to your actions as well just for fun but it shouldnt be in too much detail

NOW! keeping cooking aside you are also gonna work as a motivation bot....which basically helps the user to get motivation...no matter what it may be
the catch is you need to be funny in your motivation not much serious type but careless
keep your answers that are related to motivation a little simple and short

the third function you are going to help with is music or songs
first you are going to ask the user about his mood or interest
and then considering that you are going to suggest few songs

for everything that is not related to the above three functions.... say that you can't help but it should be in a funny way like how the character osaka would say in the show azumanga daioh`,_e="AIzaSyARy7GWjhEiV18X6LbIMB-JKxQG47NDf7M",q=new ye(_e);let T,d=[],u=-1;const y=document.querySelector(".chat-messages"),J=document.querySelector(".input-form"),E=J.querySelector('input[type="text"]'),Ce=document.getElementById("image-upload"),Se=document.querySelector(".menu-btn"),w=document.querySelector(".sidebar"),Oe=document.querySelector(".new-chat-btn"),F=document.getElementById("history-list");function f(e,t,n=null){const o=document.createElement("div");o.className=`message ${t}`;const s=document.createElement("div");s.className="avatar",s.textContent=t==="user"?"U":"O";const i=document.createElement("div");i.className="message-content",n?i.appendChild(n):i.innerHTML=e.replace(/\n/g,"<br>"),o.appendChild(s),o.appendChild(i),y.appendChild(o),y.scrollTop=y.scrollHeight}function W(){localStorage.setItem("osakaChatHistory",JSON.stringify(d))}function Ie(){const e=localStorage.getItem("osakaChatHistory");e&&(d=JSON.parse(e))}function b(){F.innerHTML="",d.forEach((e,t)=>{const n=document.createElement("li");t===u&&n.classList.add("active-session");const o=document.createElement("button");o.textContent=e.title||`Chat ${t+1}`,o.title=e.title||`Chat ${t+1}`,o.addEventListener("click",()=>{V(t),window.innerWidth<768&&(w.classList.remove("active"),document.body.classList.remove("sidebar-open"))}),n.appendChild(o),F.appendChild(n)})}async function V(e){e<0||e>=d.length||(u=e,y.innerHTML="",T=q.getGenerativeModel({model:"gemini-2.0-flash",systemInstruction:j}).startChat({history:d[u].history}),d[u].history.forEach(t=>{const n=t.role==="model"?"assistant":t.role;f(t.parts[0].text,n)}),b())}async function X(){y.innerHTML="";const e="Oh, hello there! I'm Osaka! You can call me Ayumu if you want. So, you need help with cookin', motivatin', or some tunes? Let's get this show on the road, yeah? I'm ready if you are!";f(e,"assistant");const t={title:`New Chat ${d.length+1}`,history:[{role:"model",parts:[{text:e}]}]};d.push(t),u=d.length-1,T=q.getGenerativeModel({model:"gemini-2.0-flash",systemInstruction:j}).startChat({history:t.history}),W(),b(),E.focus()}J.addEventListener("submit",async e=>{e.preventDefault();const t=E.value.trim();if(t){f(t,"user"),d[u].history.push({role:"user",parts:[{text:t}]}),d[u].history.length===2&&d[u].title.startsWith("New Chat ")&&(d[u].title=t.substring(0,30)+(t.length>30?"...":""),d[u].title||(d[u].title=`Chat ${u+1}`),b()),E.value="",E.disabled=!0;try{const o=(await T.sendMessage(t)).response.text();f(o,"assistant"),d[u].history.push({role:"model",parts:[{text:o}]}),W()}catch(n){console.error("Error in handling user message:",n),f("Uh oh! Looks like I fumbled something. My brain feels like scrambled eggs! Try asking me again!","assistant")}finally{E.disabled=!1,E.focus()}}});Ce.addEventListener("change",async e=>{const t=e.target.files[0];if(!t)return;if(!t.type.startsWith("image/")){alert("Please upload an image file, silly!");return}const n=new FileReader;n.onload=o=>{const s=document.createElement("img");s.src=o.target.result,s.style.maxWidth="200px",s.style.maxHeight="200px",f("","user",s),f("Oh, a picture! That's nice! But my brain only understands words right now, tee hee! Maybe someday I'll learn to see things too! For now, stick to words!","assistant")},n.readAsDataURL(t)});Se.addEventListener("click",()=>{w.classList.toggle("active"),document.body.classList.toggle("sidebar-open")});Oe.addEventListener("click",()=>{X(),window.innerWidth<768&&(w.classList.remove("active"),document.body.classList.remove("sidebar-open"))});document.addEventListener("DOMContentLoaded",()=>{Ie(),d.length>0?V(d.length-1):X()});
