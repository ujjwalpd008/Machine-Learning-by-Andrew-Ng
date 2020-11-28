(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["7a03973dd28a0a6118d211020716d4ee"],{B4xi:function(e,t,r){"use strict";e.exports={SET_CURRENT_TOPIC:"SET_CURRENT_TOPIC",CLEAR_RECOMMENDATION:"CLEAR_RECOMMENDATION",CLEAR_RECOMMENDATIONS:"CLEAR_RECOMMENDATIONS",LOAD_USER_INFO:"LOAD_USER_INFO",UPDATE_FPM_MASTERY:"UPDATE_FPM_MASTERY",UPDATE_FPM_MASTERY_COMPLETE:"UPDATE_FPM_MASTERY_COMPLETE",UPDATE_PROGRESS:"UPDATE_PROGRESS",UPDATE_RECOMMENDATIONS:"UPDATE_RECOMMENDATIONS",UPDATE_STATUS:"UPDATE_STATUS",UPDATE_BEST_SCORE:"UPDATE_BEST_SCORE",UPDATE_LATEST_SCORE:"UPDATE_LATEST_SCORE",UPDATE_QUIZ_SCORE:"UPDATE_QUIZ_SCORE",UPDATE_TASK_STATUS:"UPDATE_TASK_STATUS",UPDATE_LAST_SECOND_WATCHED:"UPDATE_LAST_SECOND_WATCHED",UPDATE_FLOATING_SIDEBAR_PROJECT_LINKS:"UPDATE_FLOATING_SIDEBAR_PROJECT_LINKS"}},Jayu:function(e,t,r){"use strict";r("5DmW");var n=r("ANjH");var a=u(r("kDsU"));var s=r("e5gs");var o=r("0zMT");function u(e){if(e&&e.__esModule){return e}else{var t={};if(e!=null){for(var r in e){if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};if(n.get||n.set){Object.defineProperty(t,r,n)}else{t[r]=e[r]}}}}t.default=e;return t}}var c=(0,o.createCompose)({reduxDevtoolsOptions:{name:"User Info"}});var i=(0,s.handleSideEffects)(s.defaultCallbacks);var p=function e(n){return function(r){return function(e){var t=r(e);i(r,e,n.getState());return t}}};e.exports=(0,n.createStore)(a.default,a.defaultState,c((0,n.applyMiddleware)(p)))},e5gs:function(e,t,r){"use strict";r("pNMO");r("ma9I");r("TeQF");r("+2oP");r("3KgV");r("5DmW");r("FZtP");Object.defineProperty(t,"__esModule",{value:true});t.defaultCallbacks=t.handleSideEffects=void 0;var n=c(r("lTCR"));var a=c(r("o1mU"));var o=c(r("mXPZ"));var s=c(r("B4xi"));var u=r("pCog");function c(e){return e&&e.__esModule?e:{default:e}}function i(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};var n=Object.keys(r);if(typeof Object.getOwnPropertySymbols==="function"){n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))}n.forEach(function(e){p(t,e,r[e])})}return t}function p(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}function l(){var t=d(["\n    query getFpmMasteryForTopic($topicId: String!) {\n        user {\n            id\n            curationItemProgress(topicId: $topicId) {\n                masteryMap {\n                    progressKey\n                    status\n                }\n                currentMastery {\n                    percentage\n                    pointsEarned\n                    pointsAvailable\n                }\n            }\n        }\n    }\n"]);l=function e(){return t};return t}function d(e,t){if(!t){t=e.slice(0)}return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var E=function e(n){return function(e,t,r){switch(t.type){case s.default.SET_CURRENT_TOPIC:n.onSetCurrentTopic&&n.onSetCurrentTopic(e,t.topicId,t.masteryEnabled);break}}};t.handleSideEffects=E;var f=(0,n.default)(l());var T={onSetCurrentTopic:function e(s,t,r){if(!r||!o.default.hasProfile){return}(0,a.default)(f,{topicId:t}).then(function(e){var t=e.data;var r=t.user.curationItemProgress;var n=r.masteryMap.reduce(function(e,t){var r=t.progressKey,n=t.status;return i({},e,p({},r,n))},{});var a={masteryMap:n,masteryPercentage:r.currentMastery.percentage,masteryPointsEarned:r.currentMastery.pointsEarned,masteryPointsAvailable:r.currentMastery.pointsAvailable};s((0,u.updateFpmMastery)(a))}).then(function(){s((0,u.updateFpmMasteryComplete)())})}};t.defaultCallbacks=T},kDsU:function(e,t,r){"use strict";r("pNMO");r("ma9I");r("TeQF");r("5DmW");r("FZtP");Object.defineProperty(t,"__esModule",{value:true});t.default=t.defaultState=void 0;var f=r("nA/X");function T(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};var n=Object.keys(r);if(typeof Object.getOwnPropertySymbols==="function"){n=n.concat(Object.getOwnPropertySymbols(r).filter(function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))}n.forEach(function(e){S(t,e,r[e])})}return t}function S(e,t,r){if(t in e){Object.defineProperty(e,t,{value:r,enumerable:true,configurable:true,writable:true})}else{e[t]=r}return e}var n=r("B4xi"),M=n.SET_CURRENT_TOPIC,P=n.CLEAR_RECOMMENDATION,m=n.CLEAR_RECOMMENDATIONS,y=n.LOAD_USER_INFO,A=n.UPDATE_FPM_MASTERY,O=n.UPDATE_FPM_MASTERY_COMPLETE,v=n.UPDATE_PROGRESS,I=n.UPDATE_STATUS,b=n.UPDATE_BEST_SCORE,D=n.UPDATE_LATEST_SCORE,C=n.UPDATE_QUIZ_SCORE,R=n.UPDATE_RECOMMENDATIONS,U=n.UPDATE_TASK_STATUS,g=n.UPDATE_LAST_SECOND_WATCHED,N=n.UPDATE_FLOATING_SIDEBAR_PROJECT_LINKS;function j(e,t,r){return{percentage:e,pointsEarned:t,pointsAvailable:r}}var F={currentTopic:null,bestScoreMap:{},latestScoreMap:{},masteryMap:{},unitMastery:{percentage:0,pointsEarned:0,pointsAvailable:0},subjectMastery:{percentage:0,pointsEarned:0,pointsAvailable:0},masteryUpdateComplete:false,quizScores:{},recommendations:[],statusMap:{},taskInProgressMap:{},floatingSidebarProjectLinkMap:{},lastSecondWatchedMap:{}};t.defaultState=F;var a=function e(t,r){if(!t){return F}switch(r.type){case v:{var n=r.fpmPromotions||{};var a=(0,f.getUpdatedMasteryPoints)(t.unitMastery,t.masteryMap,n);var s=(0,f.getUpdatedMasteryPoints)(t.subjectMastery,t.masteryMap,n);var o=T({},t.masteryMap);Object.keys(t.masteryMap).forEach(function(e){o[e]=n[e]||o[e]});return T({},t,{masteryMap:o,subjectMastery:s,unitMastery:a})}case M:return T({},t,{currentTopic:r.topicId});case O:return T({},t,{masteryUpdateComplete:true});case A:return T({},t,{masteryMap:r.masteryMap,unitMastery:typeof r.masteryPercentage==="number"?j(r.masteryPercentage,r.masteryPointsEarned||0,r.masteryPointsAvailable||0):t.unitMastery});case I:{var u=t.statusMap[r.progressKey];if(u!=="complete"&&r.status!=="unstarted"){if(u===r.status){return t}u=r.status}return T({},t,{statusMap:T({},t.statusMap,S({},r.progressKey,u))})}case U:return T({},t,{taskInProgressMap:T({},t.taskInProgressMap,S({},r.taskKey,r.inProgress))});case b:{var c=r.bestScore;var i=c.numCorrect/c.numAttempted;var p=t.bestScoreMap[r.progressKey];if(p&&p.numCorrect/p.numAttempted>=i){c=p}return T({},t,{bestScoreMap:T({},t.bestScoreMap,S({},r.progressKey,c))})}case D:{var l=r.latestScore;return T({},t,{latestScoreMap:T({},t.latestScoreMap,S({},r.progressKey,l))})}case C:return T({},t,{quizScores:T({},t.quizScores,S({},r.quizKey,r.quizScore))});case R:return T({},t,{recommendations:r.recommendations});case P:{var d=r;return T({},t,{recommendations:t.recommendations.filter(function(e){var t=e.contentId,r=e.kind;return r!==d.kind||t!==d.contentId})})}case m:{var E=r;return T({},t,{recommendations:t.recommendations.filter(function(e){var t=e.sourceId;return t!==E.sourceId})})}case y:return T({},t,{masteryMap:r.userInfo.masteryMap||t.masteryMap,unitMastery:j(r.userInfo.masteryPercentage!=null?r.userInfo.masteryPercentage:t.unitMastery.percentage,r.userInfo.masteryPointsEarned!=null?r.userInfo.masteryPointsEarned:t.unitMastery.pointsEarned,r.userInfo.masteryPointsAvailable!=null?r.userInfo.masteryPointsAvailable:t.unitMastery.pointsAvailable),subjectMastery:j(r.userInfo.subjectMasteryPercentage,r.userInfo.subjectMasteryPointsEarned,r.userInfo.subjectMasteryPointsAvailable),quizScores:T({},r.userInfo.quizScores,t.quizScores),recommendations:r.userInfo.recommendations||t.recommendations,statusMap:T({},r.userInfo.statusMap,t.statusMap),taskInProgressMap:T({},r.userInfo.taskInProgressMap,t.taskInProgressMap),bestScoreMap:T({},r.userInfo.bestScoreMap,t.bestScoreMap),latestScoreMap:T({},r.userInfo.latestScoreMap,t.latestScoreMap)});case g:if(r.lastSecondWatched===undefined||r.lastSecondWatched===t.lastSecondWatchedMap[r.readableId]){return t}else{return T({},t,{lastSecondWatchedMap:T({},t.lastSecondWatchedMap,S({},r.readableId,r.lastSecondWatched))})}case N:return T({},t,{floatingSidebarProjectLinkMap:T({},t.floatingSidebarProjectLinkMap,S({},r.topicId,r.floatingSidebarProjectLinks))});default:return t}};var s=a;t.default=s},pCog:function(e,t,r){"use strict";r("TeQF");r("+2oP");r("3KgV");Object.defineProperty(t,"__esModule",{value:true});t.updateRecommendations=t.updateProgress=t.updateFpmMasteryComplete=t.updateFpmMastery=t.reportQuizCompletion=t.startQuiz=t.retryQuiz=t.clearForItem=t.clearForTopic=t.setCurrentTopic=void 0;var n=c(r("lTCR"));var a=r("skGw");var o=r("B4xi");var s=r("ZC1Y");var u=r("o1mU");function c(e){return e&&e.__esModule?e:{default:e}}function i(){var t=p(["\n    mutation clearRecommendationForContentItemWeb(\n        $contentDescriptor: String!\n        $unitId: String!\n    ) {\n        clearRecommendation(\n            contentDescriptor: $contentDescriptor\n            unitId: $unitId\n        ) {\n            wasSuccessful\n        }\n    }\n"]);i=function e(){return t};return t}function p(e,t){if(!t){t=e.slice(0)}return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var l=function e(t,r){return{type:o.SET_CURRENT_TOPIC,topicId:t,masteryEnabled:r}};t.setCurrentTopic=l;var d=function e(t,r){var n=(0,a.encodeParams)({topicId:t,sourceId:r});(0,a.khanFetch)("/api/internal/user/recommendations/clear_for_source?".concat(n),{method:"POST"});return{type:o.CLEAR_RECOMMENDATIONS,sourceId:r}};t.clearForTopic=d;var E=(0,n.default)(i());var f=function e(t,r){(0,u.apolloMutate)(E,{unitId:r,contentDescriptor:(0,s.getContentDescriptor)(t)});return{type:o.CLEAR_RECOMMENDATION,contentId:t.contentId,kind:t.kind}};t.clearForItem=f;var T=function e(t){return{type:o.UPDATE_TASK_STATUS,taskKey:t,inProgress:false}};t.retryQuiz=T;var S=function e(t){return{type:o.UPDATE_TASK_STATUS,taskKey:t,inProgress:true}};t.startQuiz=S;var M=function e(t,r){return{type:o.UPDATE_QUIZ_SCORE,quizKey:t,quizScore:{completedDate:new Date,numCorrect:r.filter(function(e){return e.correct}).length,numAttempted:r.length}}};t.reportQuizCompletion=M;var P=function e(t){var r=t.masteryMap,n=t.masteryPercentage,a=t.masteryPointsEarned,s=t.masteryPointsAvailable;return{type:o.UPDATE_FPM_MASTERY,masteryMap:r,masteryPercentage:n,masteryPointsEarned:a,masteryPointsAvailable:s}};t.updateFpmMastery=P;var m=function e(){return{type:o.UPDATE_FPM_MASTERY_COMPLETE}};t.updateFpmMasteryComplete=m;var y=function e(t){return{type:o.UPDATE_PROGRESS,fpmPromotions:t}};t.updateProgress=y;var A=function e(t){return{type:o.UPDATE_RECOMMENDATIONS,recommendations:t}};t.updateRecommendations=A}}]);
//# sourceMappingURL=../../sourcemaps/en/7a03973dd28a0a6118d211020716d4ee.660b93ff6c3c199e6203.js.map