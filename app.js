/* built by pages.py from app.html */
if (!document.getElementById('loading')) document.body.insertAdjacentHTML('afterbegin', "\n<a class=\"skip\" href=\"#\" id=\"skip\">Skip to content</a>\n<header class=\"mast\"><div class=\"mast-in\">\n  <a class=\"brand\" href=\"#home\"><span class=\"bw\">wrestle<span>.live</span></span> <small>RANKINGS</small><span class=\"sr\"> home</span></a>\n  <nav class=\"tabs\" aria-label=\"Views\">\n    <a href=\"#home\" data-view=\"home\">Home</a>\n    <a href=\"#rankings\" data-view=\"rankings\">Rankings</a>\n    <a href=\"#teams\" data-view=\"teams\">Teams</a>\n    <a href=\"#events\" data-view=\"events\">Events</a>\n    <a href=\"#matchups\" data-view=\"sim\">Matchups</a>\n    <a href=\"#odds\" data-view=\"odds\" id=\"tab-odds\">State odds</a>\n  </nav>\n  <form class=\"hsearch\" role=\"search\" id=\"hsearch\"><label for=\"hq\" class=\"sr\">Search wrestlers, schools and events</label><input id=\"hq\" type=\"search\" placeholder=\"Search wrestlers, schools\" autocomplete=\"off\" aria-controls=\"hq-list\"><div class=\"suggest\" id=\"hq-list\" hidden></div></form>\n  <a class=\"sister\" href=\"https://wrestle.live/\" target=\"_blank\" rel=\"noopener\">wrestle.live<span aria-hidden=\"true\"> \u2197</span><span class=\"sr\"> tournament hosting (opens in a new tab)</span></a>\n  <a class=\"msearch\" href=\"#search\" aria-label=\"Search\"><svg aria-hidden=\"true\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\"><circle cx=\"11\" cy=\"11\" r=\"7\"></circle><path d=\"M20 20l-3.5-3.5\"></path></svg><span class=\"lbl\">Search</span></a>\n</div></header>\n<nav class=\"bottombar\" aria-label=\"Phone menu\">\n  <a href=\"#home\" data-view=\"home\"><svg aria-hidden=\"true\" width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z\"></path></svg>Home</a>\n  <a href=\"#rankings\" data-view=\"rankings\"><svg aria-hidden=\"true\" width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 20V10M10 20V4M16 20v-7M22 20H2\"></path></svg>Rankings</a>\n  <a href=\"#odds\" data-view=\"odds\" id=\"bb-odds\"><svg aria-hidden=\"true\" width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 5h5v4H3zM3 15h5v4H3zM8 7h4v10H8M12 12h5M17 10h4v4h-4z\"></path></svg>State odds</a>\n  <a href=\"#teams\" data-view=\"teams\"><svg aria-hidden=\"true\" width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"9\" cy=\"7\" r=\"4\"></circle><path d=\"M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8\"></path></svg>Teams</a>\n  <a href=\"#matchups\" data-view=\"sim\" id=\"bb-sim\"><svg aria-hidden=\"true\" width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 8h14l-4-4\"/><path d=\"M20 16H6l4 4\"/></svg>Matchups</a>\n  <button type=\"button\" id=\"morebtn\" aria-expanded=\"false\" aria-controls=\"moresheet\"><svg aria-hidden=\"true\" width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"5\" cy=\"12\" r=\"1.5\"></circle><circle cx=\"12\" cy=\"12\" r=\"1.5\"></circle><circle cx=\"19\" cy=\"12\" r=\"1.5\"></circle></svg>More</button>\n</nav>\n<div class=\"moresheet\" id=\"moresheet\" hidden>\n  <a href=\"#events\">Events</a><a href=\"#matchups\" id=\"more-sim\">Matchups</a><a href=\"#odds\" id=\"more-odds\">State odds</a><a href=\"#leaders\">Stat leaders</a><a href=\"#accuracy\">How accurate is it?</a><a href=\"#search\">Search</a><a class=\"ext\" href=\"https://wrestle.live/\" target=\"_blank\" rel=\"noopener\">Host a tournament on wrestle.live<span aria-hidden=\"true\"> \u2197</span><span class=\"sr\"> (opens in a new tab)</span></a>\n</div>\n\n<main>\n  <p id=\"live\" class=\"sr\" role=\"status\" aria-live=\"polite\"></p>\n  <p id=\"loading\" class=\"lede\" role=\"status\">Loading Ohio results\u2026</p>\n\n  <!-- HOME -->\n  <section id=\"v-home\" hidden>\n    <div class=\"hero-home\">\n      <div class=\"hero-bg\" aria-hidden=\"true\"><span class=\"mat m1\"></span><span class=\"mat m2\"></span><span class=\"mat m3\"></span></div>\n      <div>\n        <p class=\"eyebrow\" id=\"h-eye\">Now covering Ohio \u00b7 high school and middle school \u00b7 boys and girls</p>\n        <h1 tabindex=\"-1\">Rankings built <br><span class=\"hl-gold\">from real results.</span></h1>\n        <p class=\"lede\" id=\"h-lede\">Ratings, P4P Scores, career histories and state bracket odds from tournament results. Updated through the season.</p>\n      </div>\n      <form class=\"searchcard\" role=\"search\" id=\"h-form\">\n        <label for=\"h-q\">Find a wrestler, school or event</label>\n        <div class=\"row\"><input id=\"h-q\" type=\"search\" placeholder=\"e.g. a name or a school\" autocomplete=\"off\" aria-controls=\"h-q-list\"><button type=\"submit\" class=\"btn primary\">Search</button></div>\n        <div class=\"suggest\" id=\"h-q-list\" hidden></div>\n        <div class=\"quick\" id=\"h-quick\"><a href=\"#rankings/pre\" id=\"q-pre\" hidden>Preseason rankings</a><a href=\"#rankings/MS\">Middle school rankings</a><a href=\"#matchups/d\">Simulate a dual</a><a href=\"#matchups/w\">Compare two wrestlers</a><a href=\"#rankings/movers\" id=\"q-movers\" hidden>This week's biggest movers</a><a href=\"#odds\" id=\"q-odds\" hidden>State bracket odds</a></div>\n      </form>\n    </div>\n    <div class=\"strip\" id=\"h-strip\" aria-label=\"By the numbers\"></div>\n    <section class=\"sect\" aria-labelledby=\"h-ones\">\n      <div class=\"secthead\"><div><h2 id=\"h-ones\">No. 1 at every weight</h2><p class=\"sub\" id=\"h-ones-sub\" style=\"margin:2px 0 0;font-size:14px\"></p></div><div class=\"sh-right\"><a class=\"lnk\" id=\"h-ones-all\" href=\"#rankings\">Full rankings</a><div class=\"seg\" role=\"group\" aria-label=\"Gender\" id=\"h-g\"></div></div></div>\n      <div class=\"ones\" id=\"h-onesgrid\" data-nosnippet></div>\n    </section>\n    <section class=\"sect\" aria-labelledby=\"h-fol\" id=\"h-folsec\"><h2 id=\"h-fol\">Following</h2><div id=\"h-folbody\" data-nosnippet></div></section>\n    <section class=\"sect\" aria-labelledby=\"h-wk\" id=\"h-wksec\" hidden data-nosnippet><div class=\"secthead\"><div><h2 id=\"h-wk\">This week</h2><p class=\"sub\" id=\"h-wk-sub\" style=\"margin:2px 0 0;font-size:14px\"></p></div><div class=\"sh-right\"><a class=\"lnk\" href=\"#leaders\">Stat leaders</a></div></div><div class=\"wk\" id=\"h-wkbody\"></div></section>\n    <section class=\"sect\" aria-labelledby=\"h-lead\"><h2 id=\"h-lead\">Pound-for-pound and team leaders</h2><div class=\"leaders\" id=\"h-leaders\" data-nosnippet></div></section>\n    <section class=\"sect\" aria-labelledby=\"h-how\"><h2 id=\"h-how\">How to read the numbers</h2><div class=\"explain\" id=\"h-explain\"></div></section>\n  </section>\n\n  <!-- RANKINGS -->\n  <section id=\"v-rankings\" hidden>\n    <p class=\"eyebrow\" id=\"r-eyebrow\">Ohio high school \u00b7 statewide</p>\n    <h1 tabindex=\"-1\">Rankings</h1>\n    <p class=\"lede\" id=\"r-lede\"><strong>Rating</strong> is how strong a wrestler is right now, built from every bout we have; the \u00b1 is how sure it is. <strong>P4P Score</strong> puts every weight on one scale: 500 is a typical state qualifier, 1,000 a typical state champion.</p>\n    <div class=\"viewtabs\" role=\"group\" aria-label=\"Rankings view\" id=\"r-views\"></div>\n    <details class=\"about\"><summary>How rankings work</summary>\n      <p>Ratings use Glicko-2: every bout moves both wrestlers, and a pin moves them more than a decision. The \u00b1 shows how sure the rating is. To be ranked a wrestler needs an Ohio team and 6 rated bouts in the season (4 for weekly rankings). Early in the season, until December 15, the weekly list also shows returning wrestlers after 1 bout and new wrestlers after 3, marked provisional, so there is a current list from the first weekend. Ratings compare wrestlers within a season; P4P Scores compare across weights and seasons. Records count only bouts in the database. <a href=\"#accuracy\">How accurate are the ratings?</a></p>\n    </details>\n    <div class=\"filters toolbar\">\n      <div class=\"field\"><label for=\"r-season\">Season</label><select id=\"r-season\"></select></div>\n      <div class=\"field\"><label for=\"r-asof\">As of</label><select id=\"r-asof\"></select></div>\n      <div class=\"seg\" role=\"group\" aria-label=\"Gender\" id=\"r-gender\"></div>\n      <div class=\"seg\" role=\"group\" aria-label=\"Division\" id=\"r-div\"></div>\n      <div class=\"seg\" role=\"group\" aria-label=\"Grade\" id=\"r-grade\"></div>\n    </div>\n    <p class=\"note\" id=\"r-gnote\" hidden>Grade comes from the OHSAA state pairings, middle school records and full four-season careers, so it is known for about half of ranked wrestlers. Wrestlers without a known grade are left out when a grade is picked.</p>\n    <div class=\"pills\" role=\"group\" aria-label=\"Weight class\" id=\"r-weights\"></div>\n    <div class=\"podium\" id=\"r-podium\" aria-label=\"Top three\"></div>\n    <p class=\"note\" id=\"r-prenote\" hidden></p>\n    <p class=\"note prov-note\" id=\"r-provnote\" hidden><span class=\"chip prov\">Provisional</span> Early in the season (until December 15) a returning wrestler is listed after 1 bout and a new wrestler after 3, so there is a current list from the first weekend. Ranks firm up once a wrestler has 4 bouts.</p>\n    <div class=\"card\">\n      <div class=\"card-head\"><h2 id=\"r-title\"></h2><span class=\"sub\" id=\"r-count\"></span></div>\n      <table><thead id=\"r-head\"></thead><tbody id=\"r-body\"></tbody></table>\n      <div class=\"more\"><button type=\"button\" id=\"r-more\">Show all</button></div>\n    </div>\n    <div class=\"card\" id=\"r-movers\" hidden style=\"margin-top:16px\"></div>\n  </section>\n\n  <!-- STATE ODDS -->\n  <section id=\"v-odds\" hidden>\n    <p class=\"eyebrow\">OHSAA state tournament</p>\n    <h1 tabindex=\"-1\">State bracket odds</h1>\n    <p class=\"lede\">We simulated each state bracket 20,000 times, using only what was known before the tournament, then compared the odds with what actually happened.</p>\n    <ol class=\"howstate\" aria-label=\"How the state tournament works\">\n      <li><strong>16 make state</strong><span>at each weight, after sectionals and districts</span></li>\n      <li><strong>Win 4 straight</strong><span>to become state champion</span></li>\n      <li><strong>Lose once</strong><span>and you can still wrestle back for 3rd to 8th. Lose twice and you're out.</span></li>\n      <li><strong>Top 8 medal</strong><span>and stand on the podium</span></li>\n    </ol>\n    <details class=\"about\"><summary>How the odds work</summary>\n      <p>Brackets use the real draw (bracket spots 1 to 16 from the OHSAA pairings). Each bout's chance comes from the blend: the wrestler's rating plus their official season record, district finish, grade and last year's state finish, weighted by what predicted state bouts best in earlier seasons, with recent seasons counting most. The more of both wrestlers' bouts we have, the more the rating counts. Title odds follow the bracket exactly; placing odds approximate the consolation crossings. <span id=\"o-about\"></span></p>\n    </details>\n    <div class=\"filters\">\n      <div class=\"field\"><label for=\"o-season\">Season</label><select id=\"o-season\"></select></div>\n      <div class=\"seg\" role=\"group\" aria-label=\"Division\" id=\"o-div\"></div>\n      <div class=\"seg\" role=\"group\" aria-label=\"View\" id=\"o-view\"></div>\n    </div>\n    <div class=\"pills\" role=\"group\" aria-label=\"Weight class\" id=\"o-weights\"></div>\n    <div class=\"sumcards\" id=\"o-cards\"></div>\n    <p class=\"note bracketnote\" id=\"o-bnote\">Each box is one group of four bracket spots: two first-round bouts, whose winners meet in the quarterfinal for one semifinal spot. Each half of the bracket sends one wrestler to the final.</p>\n    <div id=\"o-quarters\"></div>\n    <div class=\"card\" id=\"o-tablecard\">\n      <div class=\"card-head\"><h2 id=\"o-title\"></h2><span class=\"sub\" id=\"o-sum\"></span></div>\n      <table>\n        <thead><tr><th class=\"num lg\">Spot</th><th>Wrestler</th><th class=\"lg\">School</th><th class=\"num lg\">Rating</th><th class=\"num\">Win state</th><th class=\"num lg\">Top 3</th><th class=\"num\">Medal <span class=\"lg\">(top 8)</span></th><th class=\"num lg\">Expected finish</th><th>Actual finish</th></tr></thead>\n        <tbody id=\"o-body\"></tbody>\n      </table>\n    </div>\n  </section>\n\n\n  <!-- TEAMS LIST -->\n  <section id=\"v-teams\" hidden>\n    <p class=\"eyebrow\">Ohio programs</p>\n    <h1 tabindex=\"-1\">Team rankings</h1>\n    <p class=\"lede\">Lineup strength adds each team's best P4P Score at every weight, so it rewards depth, not one star.</p>\n    <div class=\"filters\">\n      <div class=\"field\"><label for=\"t-season\">Season</label><select id=\"t-season\"></select></div>\n      <div class=\"seg\" role=\"group\" aria-label=\"Gender\" id=\"t-gender\"></div>\n      <div class=\"seg\" role=\"group\" aria-label=\"Division\" id=\"t-div\"></div>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-head\"><h2 id=\"t-title\"></h2><span class=\"sub\" id=\"t-count\"></span></div>\n      <table>\n        <thead><tr><th>Rank</th><th>Team</th><th class=\"lg\">Div</th><th class=\"num\">Strength</th><th class=\"num lg\">Weights filled</th><th class=\"num lg\">Ranked</th><th class=\"num lg\">State qualifiers</th><th class=\"num lg\">Placers</th><th class=\"num lg\">Champions</th></tr></thead>\n        <tbody id=\"t-body\"></tbody>\n      </table>\n      <div class=\"more\"><button type=\"button\" id=\"t-more\">Show all</button></div>\n    </div>\n  </section>\n\n  <!-- TEAM -->\n  <section id=\"v-team\" hidden>\n    <div class=\"whero\">\n      <div class=\"stripe\" id=\"tm-bar\" aria-hidden=\"true\" hidden></div>\n      <span class=\"mono\" id=\"tm-mono\" aria-hidden=\"true\"></span>\n      <div style=\"flex:1 1 380px;min-width:0\">\n        <p class=\"eyebrow\" id=\"tm-eyebrow\"></p>\n        <h1 id=\"tm-name\" tabindex=\"-1\"></h1>\n        <div class=\"schoolid\" id=\"tm-school\" hidden></div>\n      </div>\n    </div>\n    <div class=\"viewtabs\" role=\"group\" aria-label=\"Team view\" id=\"tm-views\"></div>\n    <div class=\"filters\">\n      <div class=\"field\" id=\"tm-season-f\"><label for=\"tm-season\">Season</label><select id=\"tm-season\"></select></div>\n      <div class=\"seg\" role=\"group\" aria-label=\"Level\" id=\"tm-level\" hidden></div>\n      <div class=\"seg\" role=\"group\" aria-label=\"Program\" id=\"tm-gender\"></div>\n      <a class=\"btn ghost\" id=\"tm-sim\" href=\"#matchups/d\">Simulate a dual</a>\n      <button type=\"button\" class=\"btn ghost follow\" id=\"tm-follow\" aria-pressed=\"false\">Follow</button>\n    </div>\n    <div id=\"tm-hist\" hidden>\n      <div class=\"tiles\" id=\"tm-htiles\"></div>\n      <div class=\"grid2\">\n        <div class=\"card\">\n          <div class=\"card-head\"><h2>Best at every weight</h2><span class=\"sub\">Best single season at each weight</span></div>\n          <table>\n            <thead><tr><th class=\"num\">Weight</th><th>Wrestler</th><th class=\"num lg\">Season</th><th class=\"num\">P4P</th><th class=\"lg\">State</th></tr></thead>\n            <tbody id=\"tm-hbest\"></tbody>\n          </table>\n        </div>\n        <div class=\"card\">\n          <div class=\"card-head\"><h2>Top 10 seasons</h2><span class=\"sub\">All weights, ranked by P4P Score</span></div>\n          <table>\n            <thead><tr><th class=\"num\">#</th><th>Wrestler</th><th class=\"num\">Weight</th><th class=\"num lg\">Season</th><th class=\"num\">P4P</th><th class=\"lg\">State</th></tr></thead>\n            <tbody id=\"tm-htop\"></tbody>\n          </table>\n        </div>\n      </div>\n      <p class=\"note\" style=\"margin-top:14px\">History covers 2010-11 to today, from the results in our database; earlier seasons are mostly postseason results. P4P Score compares each season with that year's state field, so seasons from different years rank fairly. Older weight classes count toward the nearest current one (145 counts at 144).</p>\n    </div>\n    <div id=\"tm-seasonview\">\n    <div class=\"tiles\" id=\"tm-tiles\"></div>\n    <div class=\"grid2\">\n      <div class=\"card\">\n        <div class=\"card-head\"><h2>Lineup</h2><span class=\"sub\" id=\"tm-lu-sub\">Best ranked wrestler at each weight</span></div>\n        <table>\n          <thead><tr><th class=\"num\">Wt</th><th>Wrestler</th><th class=\"num lg\">Record</th><th class=\"num lg\">Rating</th><th class=\"num\">Rank</th><th class=\"num\">P4P</th><th class=\"lg\">State</th></tr></thead>\n          <tbody id=\"tm-lineup\"></tbody>\n        </table>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-head\"><h2>Events</h2><span class=\"sub\">Team record in bouts we have</span></div>\n        <div id=\"tm-events\"><p class=\"loading\">Loading events\u2026</p></div>\n      </div>\n    </div>\n    <div class=\"card\" id=\"tm-roster-card\" style=\"margin-top:16px\">\n      <div class=\"card-head\"><h2 id=\"tm-roster-h\">Full roster</h2><span class=\"sub\" id=\"tm-roster-sub\">Everyone with a bout for this team in our results</span></div>\n      <table>\n        <thead><tr><th class=\"num\">Wt</th><th>Wrestler</th><th class=\"num lg\">Grade</th><th class=\"num\">Record</th><th class=\"num lg\">Pins</th><th class=\"num lg\">Rating</th><th class=\"num\">Rank</th></tr></thead>\n        <tbody id=\"tm-roster\"><tr><td colspan=\"7\" class=\"loading\">Loading roster\u2026</td></tr></tbody>\n      </table>\n    </div>\n    <div class=\"card\" id=\"tm-moved\" hidden style=\"margin-top:16px\">\n      <div class=\"card-head\"><h2 id=\"tm-moved-h\">Changed schools during the season</h2><span class=\"sub\">Wrestled for this team for part of the season</span></div>\n      <table>\n        <thead><tr><th>Wrestler</th><th>Move</th><th class=\"num\">Bouts here</th><th class=\"lg\">Here</th></tr></thead>\n        <tbody id=\"tm-moved-body\"></tbody>\n      </table>\n    </div>\n    </div>\n  </section>\n\n  <!-- EVENTS LIST -->\n  <section id=\"v-events\" hidden>\n    <p class=\"eyebrow\">Results in the database</p>\n    <h1 tabindex=\"-1\">Events</h1>\n    <div class=\"card\" id=\"e-wl\" hidden></div>\n    <div class=\"filters toolbar\">\n      <div class=\"field\"><label for=\"e-season\">Season</label><select id=\"e-season\"></select></div>\n      <div class=\"seg\" role=\"group\" aria-label=\"Level\" id=\"e-level\"></div>\n      <div class=\"seg\" role=\"group\" aria-label=\"Event type\" id=\"e-type\"></div>\n      <div class=\"seg\" role=\"group\" aria-label=\"Gender\" id=\"e-gender\"></div>\n    </div>\n    <div class=\"filters e-find\">\n      <div class=\"field grow\"><label for=\"e-q\">Search</label><input type=\"search\" id=\"e-q\" placeholder=\"Event, host school, town or county\" autocomplete=\"off\"></div>\n      <div class=\"field\"><label for=\"e-near\">Near</label><input type=\"search\" id=\"e-near\" list=\"e-towns\" placeholder=\"Town or ZIP\" autocomplete=\"off\" style=\"width:160px\"><datalist id=\"e-towns\"></datalist></div>\n      <div class=\"field\"><label for=\"e-radius\">Within</label><select id=\"e-radius\"><option value=\"15\">15 miles</option><option value=\"30\" selected>30 miles</option><option value=\"60\">60 miles</option></select></div>\n      <p class=\"sub e-nearmsg\" id=\"e-nearmsg\" role=\"status\" aria-live=\"polite\"></p>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-head\"><h2 id=\"e-title\"></h2><span class=\"sub\" id=\"e-count\"></span></div>\n      <table>\n        <thead><tr><th>Event</th><th class=\"lg\">Where</th><th class=\"lg\">Type</th><th class=\"num\">Bouts</th></tr></thead>\n        <tbody id=\"e-body\"></tbody>\n      </table>\n    </div>\n    <div class=\"card hostcard\">\n      <div><h2>Running an event?</h2><p>Host it on wrestle.live: brackets, live results and registration in one place.</p></div>\n      <a class=\"btn\" href=\"https://wrestle.live/\" target=\"_blank\" rel=\"noopener\">Host on wrestle.live<span aria-hidden=\"true\"> \u2197</span><span class=\"sr\"> (opens in a new tab)</span></a>\n    </div>\n  </section>\n\n  <!-- EVENT -->\n  <section id=\"v-event\" hidden>\n    <div id=\"ev-head\">\n      <div class=\"evb-top\">\n        <span class=\"evb-logo\" id=\"ev-mono\" aria-hidden=\"true\" hidden></span>\n        <div class=\"hmain\">\n          <div class=\"evb-chips\" id=\"ev-chips\" hidden></div>\n          <p class=\"eyebrow\" id=\"ev-eyebrow\"></p>\n          <h1 id=\"ev-name\" tabindex=\"-1\"></h1>\n          <p class=\"lede\" id=\"ev-sub\"></p>\n          <p class=\"ev-where\" id=\"ev-where\" hidden></p>\n        </div>\n        <div class=\"evb-acts\" id=\"ev-acts\" hidden></div>\n      </div>\n      <nav class=\"ev-years\" id=\"ev-years\" aria-label=\"This event in other years\" hidden></nav>\n      <div class=\"evb-stats\" id=\"ev-stats\" hidden></div>\n    </div>\n    <div class=\"pills\" role=\"group\" aria-label=\"Weight class\" id=\"ev-weights\" style=\"margin-top:18px\"></div>\n    <div class=\"grid2\" id=\"ev-grid\">\n      <div class=\"ev-col\">\n      <div class=\"card\">\n        <div class=\"card-head\"><h2 id=\"ev-ptitle\">Placers</h2></div>\n        <div id=\"ev-placers\"></div>\n      </div>\n      <div class=\"card\" id=\"ev-hist\" hidden>\n      <div class=\"card-head\"><h2 id=\"ev-htitle\">Past champions</h2><span class=\"sub\" id=\"ev-hsub\"></span></div>\n      <table><thead><tr><th>Season</th><th>Champion</th><th class=\"lg\">School</th></tr></thead><tbody id=\"ev-hbody\"></tbody></table>\n    </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-head\"><h2 id=\"ev-btitle\">Bouts</h2><span class=\"sub\" id=\"ev-bcount\"></span></div>\n        <div id=\"ev-bouts\"><p class=\"loading\">Loading bouts\u2026</p></div>\n      </div>\n    </div>\n    <section class=\"evb-built\" id=\"ev-built\" aria-label=\"About this page\" hidden></section>\n  </section>\n\n  <!-- WRESTLER -->\n  <section id=\"v-wrestler\" hidden>\n    <div class=\"whero\">\n      <span class=\"mono\" id=\"w-mono\" aria-hidden=\"true\"></span>\n      <div style=\"flex:1 1 380px;min-width:0\">\n        <p class=\"eyebrow\" id=\"w-eyebrow\">Wrestler</p>\n        <h1 id=\"w-name\" tabindex=\"-1\"></h1>\n        <p class=\"lede\" id=\"w-sub\"></p>\n        <div class=\"badges\" id=\"w-badges\"></div>\n      </div>\n      <div class=\"acts\"><a class=\"btn\" href=\"#matchups/w\" id=\"w-compare\">Compare</a><button type=\"button\" class=\"btn ghost follow\" id=\"w-follow\" aria-pressed=\"false\">Follow</button><button type=\"button\" class=\"btn ghost\" id=\"w-share\">Share</button></div>\n    </div>\n    <div class=\"tiles\" id=\"w-tiles\"></div>\n    <div id=\"w-sosbar\"></div>\n    <div class=\"grid2 wgrid\">\n      <div class=\"card\">\n        <div class=\"card-head\"><h2>P4P Score by season</h2><span class=\"sub\">500 typical qualifier \u00b7 1000 typical champion</span></div>\n        <div class=\"chart\" id=\"w-chart\"></div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-head\"><h2>Seasons</h2></div>\n        <table>\n          <thead><tr><th>Season and school</th><th class=\"num\">Wt</th><th class=\"num\">Record</th><th class=\"num lg\">Rating</th><th class=\"num lg\">Rank</th><th class=\"num\">P4P</th><th>State</th></tr></thead>\n          <tbody id=\"w-body\"></tbody>\n        </table>\n      </div>\n    </div>\n    <div class=\"card sos\" style=\"margin-top:16px\" id=\"w-mcard\">\n      <h2 class=\"sr\">Matches and strength of schedule</h2>\n      <div class=\"card-head wtabs\"><div class=\"viewtabs\" role=\"group\" aria-label=\"Match view\" id=\"w-mviews\"></div><select id=\"w-mseason\" aria-label=\"Season\"></select></div>\n      <div id=\"w-matches\"><p class=\"loading\">Loading matches\u2026</p></div>\n      <div id=\"w-sos\" hidden><p class=\"sub sosnote\">Opponents judged by their end-of-season rating. \"Tougher than\" compares the average with other Ohio wrestlers' schedules that season (10+ rated opponents needed). Ohio high school bouts only; forfeits left out.</p><div id=\"w-sosbody\"><p class=\"loading\">Working out schedule strength\u2026</p></div></div>\n    </div>\n  </section>\n\n  <!-- COMPARE -->\n\n  <!-- SIMULATOR -->\n  <section id=\"v-sim\" hidden>\n    <p class=\"eyebrow\">Who wins?</p>\n    <h1 tabindex=\"-1\">Matchups</h1>\n    <p class=\"lede\" id=\"sim-lede\">Compare two wrestlers, play out a dual meet, or simulate a tournament, all from every wrestler's rating.</p>\n    <div class=\"viewtabs\" role=\"group\" aria-label=\"Matchup type\" id=\"sim-mode\"></div>\n    <div class=\"filters\">\n\n      <div class=\"field\"><label for=\"sim-season\">Season</label><select id=\"sim-season\"></select></div>\n      <div class=\"seg\" role=\"group\" aria-label=\"Boys or girls\" id=\"sim-g\"></div>\n    </div>\n    <p class=\"note sim-projnote\" id=\"sim-proj\" hidden></p>\n    <div id=\"sim-wr\" hidden>\n    <div class=\"vs\" style=\"margin-top:18px\">\n      <div class=\"picker\"><label for=\"c-a\">Wrestler A</label><input type=\"search\" id=\"c-a\" placeholder=\"Name or school\" autocomplete=\"off\"><div class=\"results\" id=\"c-ar\" hidden></div></div>\n      <div class=\"vsx\" style=\"font-family:var(--display);font-weight:700;font-size:22px;color:var(--muted);padding-bottom:8px\">VS</div>\n      <div class=\"picker\"><label for=\"c-b\">Wrestler B</label><input type=\"search\" id=\"c-b\" placeholder=\"Name or school\" autocomplete=\"off\"><div class=\"results\" id=\"c-br\" hidden></div></div>\n    </div>\n    <div id=\"c-out\"></div>\n    </div>\n    <div id=\"sim-dual\">\n      <div class=\"vs\">\n        <div class=\"picker\"><label for=\"sim-a\">Team A</label><input type=\"search\" id=\"sim-a\" placeholder=\"School name\" autocomplete=\"off\"><div class=\"results\" id=\"sim-ar\" hidden></div></div>\n        <div class=\"vsx\" style=\"font-family:var(--display);font-weight:700;font-size:22px;color:var(--muted);padding-bottom:8px\">VS</div>\n        <div class=\"picker\"><label for=\"sim-b\">Team B</label><input type=\"search\" id=\"sim-b\" placeholder=\"School name\" autocomplete=\"off\"><div class=\"results\" id=\"sim-br\" hidden></div></div>\n      </div>\n      <div id=\"sim-dout\"></div>\n    </div>\n    <div id=\"sim-tourn\" hidden>\n      <div class=\"sim-add\">\n        <div class=\"picker\"><label for=\"sim-t\">Add a team</label><input type=\"search\" id=\"sim-t\" placeholder=\"School name\" autocomplete=\"off\"><div class=\"results\" id=\"sim-tr\" hidden></div></div>\n        <div class=\"picker sim-evpick\"><label for=\"sim-ev\" id=\"sim-evl\">Or load the teams from a real event</label>\n          <input type=\"search\" id=\"sim-ev\" placeholder=\"Search events, or click to browse\" autocomplete=\"off\" role=\"combobox\" aria-expanded=\"false\" aria-controls=\"sim-evr\" aria-autocomplete=\"list\">\n          <div class=\"results\" id=\"sim-evr\" role=\"listbox\" aria-labelledby=\"sim-evl\" hidden></div></div>\n        <div class=\"field\"><label for=\"sim-places\">Places</label><select id=\"sim-places\"><option value=\"6\">6</option><option value=\"8\" selected>8</option></select></div>\n      </div>\n      <div class=\"chips\" id=\"sim-chips\"></div>\n      <div id=\"sim-tout\"></div>\n    </div>\n    <p class=\"note\" id=\"sim-how\">How it works: each bout's odds come from the two wrestlers' latest ratings for the season, and the way a win comes (fall, tech fall, major, decision) follows how bouts with the same odds have gone in our results. Lineups start with each team's highest-rated wrestler at his or her usual weight; change any spot. Duals are worked out exactly over every possible result of every bout, so the same lineups always give the same odds; fall, forfeit or default 6, tech fall 5, major 4, decision 3. Key bouts are the close ones that change a team's chance to win the dual the most. Tournaments: seeded by rating; 2 points per championship win and 1 per consolation win, bonus 2 for a fall, 1.5 for a tech fall, 1 for a major, and placement points 16-12-10-9-7-6-4-3.</p>\n  </section>\n\n  <!-- SEARCH -->\n  <section id=\"v-leaders\" hidden>\n    <p class=\"eyebrow\">Ohio high school \u00b7 from the results in our database</p>\n    <h1 tabindex=\"-1\">Stat leaders</h1>\n    <p class=\"lede\">Most pins, fastest pins, most tech falls, most wins and the longest win streaks of the season. Forfeits never count.</p>\n    <div class=\"filters toolbar\">\n      <div class=\"field\"><label for=\"l-season\">Season</label><select id=\"l-season\"></select></div>\n      <div class=\"seg\" role=\"group\" aria-label=\"Gender\" id=\"l-gender\"></div>\n    </div>\n    <div class=\"pills\" id=\"l-wts\" role=\"group\" aria-label=\"Weight class\"></div>\n    <div class=\"ldr\" id=\"l-out\" style=\"margin-top:16px\"></div>\n  </section>\n\n  <section id=\"v-youth\" hidden>\n    <div class=\"evband\" id=\"y-head\">\n      <div class=\"evb-top\">\n        <div class=\"hmain\">\n          <div class=\"evb-chips\" id=\"y-chips\" hidden></div>\n          <h1 tabindex=\"-1\" id=\"y-name\">Youth results</h1>\n          <p class=\"lede\" id=\"y-sub\"></p>\n        </div>\n        <div class=\"evb-acts\" id=\"y-acts\" hidden></div>\n      </div>\n      <div class=\"evb-stats\" id=\"y-stats\" hidden></div>\n    </div>\n    <div class=\"whero\" id=\"y-hero\" hidden>\n      <span class=\"mono\" id=\"y-mono\" aria-hidden=\"true\"></span>\n      <div class=\"hmain\"><p class=\"eyebrow\" id=\"y-eye\"></p><p class=\"lede\" id=\"y-lede\"></p></div>\n      <div class=\"acts\" id=\"y-hacts\"></div>\n    </div>\n    <div class=\"tiles\" id=\"y-tiles\" hidden></div>\n    <div id=\"y-out\"></div>\n  </section>\n\n  <section id=\"v-preview\" hidden>\n    <div class=\"evband\" id=\"pv-head\">\n      <div class=\"evb-top\">\n        <span class=\"evb-logo\" id=\"pv-mono\" aria-hidden=\"true\" hidden></span>\n        <div class=\"hmain\">\n          <div class=\"evb-chips\" id=\"pv-chips\" hidden></div>\n          <p class=\"eyebrow\" id=\"pv-eyebrow\">Event preview</p>\n          <h1 tabindex=\"-1\" id=\"pv-name\">Event preview</h1>\n          <p class=\"lede\" id=\"pv-sub\"></p>\n        </div>\n        <div class=\"evb-acts\" id=\"pv-acts\" hidden></div>\n      </div>\n    </div>\n    <div id=\"pv-out\"></div>\n  </section>\n\n  <section id=\"v-search\" hidden>\n    <h1 tabindex=\"-1\">Search</h1>\n    <div class=\"filters\"><input type=\"search\" id=\"s-q\" placeholder=\"Wrestler, school or event\" autocomplete=\"off\" aria-label=\"Search wrestlers, schools and events\"></div>\n    <div class=\"stack\" id=\"s-out\"></div>\n  </section>\n\n  <!-- ACCURACY -->\n  <section id=\"v-accuracy\" hidden>\n    <p class=\"eyebrow\">Backtest \u00b7 every state tournament we have</p>\n    <h1 tabindex=\"-1\">How accurate is it?</h1>\n    <p class=\"lede\">The fair test of a rating: for every season, we used only what was known the day before the state tournament to pick the winner of every state bout, then checked the picks against what happened.</p>\n    <div class=\"tiles\" id=\"a-tiles\"></div>\n    <div class=\"card acc-main\">\n      <div class=\"card-head\"><h2>State tournament picks, season by season</h2><span class=\"sub\">Share of state bouts picked correctly</span></div>\n      <div class=\"acc-key\" aria-hidden=\"true\"><span><i class=\"k1\"></i>Blend</span><span><i class=\"k2\"></i>Rating alone</span><span><i class=\"k3\"></i>Better season record</span><span><i class=\"k4\"></i>Better district finish</span></div>\n      <table>\n        <thead><tr><th>Season</th><th class=\"num lg\">Bouts</th><th>Blend</th><th>Rating alone</th><th class=\"num\">Record</th><th class=\"num lg\">District</th></tr></thead>\n        <tbody id=\"a-body\"></tbody>\n      </table>\n    </div>\n    <div class=\"grid2 eq\" style=\"margin-top:16px\">\n      <div class=\"card\">\n        <div class=\"card-head\"><h2>Week-ahead picks</h2><span class=\"sub\">In-season bouts</span></div>\n        <p class=\"note acc-intro\">Each week's ratings picked every bout in the following 7 days.</p>\n        <table><thead><tr><th>Season</th><th class=\"num lg\">Weeks</th><th class=\"num\">Bouts</th><th>Correct</th></tr></thead><tbody id=\"a-week\"></tbody></table>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-head\"><h2>State title odds</h2><span class=\"sub\">Simulated brackets</span></div>\n        <p class=\"note acc-intro\">How often the wrestler we made the title favorite won, and the odds we gave the eventual champion.</p>\n        <table><thead><tr><th>Season</th><th class=\"num lg\">Brackets</th><th>Favorite won</th><th class=\"num\">Champion's odds</th></tr></thead><tbody id=\"a-odds\"></tbody></table>\n      </div>\n    </div>\n    <div class=\"card\" style=\"margin-top:16px\">\n      <div class=\"card-head\"><h2>Results in the database</h2><span class=\"sub\">Bouts per season</span></div>\n      <div style=\"overflow-x:auto\"><table>\n        <thead><tr><th>Season</th><th class=\"num\">Tournaments</th><th class=\"num lg\">Dual meets</th><th class=\"num\">Sectionals</th><th class=\"num\">Districts</th><th class=\"num\">State</th><th class=\"num lg\">Middle school</th></tr></thead>\n        <tbody id=\"a-data\"></tbody>\n      </table></div>\n    </div>\n    <div class=\"card acc-how\" style=\"margin-top:16px\">\n      <div class=\"card-head\"><h2>How the test works</h2></div>\n      <ul>\n        <li><strong>Blend</strong> is the rating plus each wrestler's official season record, district finish, grade and last year's state finish. Its weights are learned only from earlier seasons, with recent seasons counting most, and the rating counts for more when we have more of both wrestlers' bouts.</li>\n        <li><strong>Rating alone</strong> uses only bout results: every bout moves both wrestlers. A pin, tech fall or major counts for more than a close decision, and forfeits, injury defaults and byes don't count.</li>\n        <li><strong>Record</strong> and <strong>District</strong> are simple guesses for comparison: pick the wrestler with the better season record, or the better district finish.</li>\n        <li>Postseason bouts count a quarter more than regular-season bouts. Returning wrestlers start the next season a step up, with more uncertainty. 2019-20 had no state tournament.</li>\n      </ul>\n    </div>\n  </section>\n</main>\n<footer><div class=\"in\">\n  <div><b><span class=\"bwf\">wrestle<span>.live</span></span> <small>RANKINGS</small></b><p>Ratings and rankings built from real tournament results. Now covering Ohio high school and middle school: full seasons from 2010-11, state tournaments back to 1999-00. Youth results from events run on wrestle.live.</p><p>Records count only the bouts in our database.</p></div>\n  <div><h2>Explore</h2><ul><li><a href=\"#rankings\">Rankings</a></li><li><a href=\"#rankings/p4p\">Pound-for-pound</a></li><li><a href=\"#leaders\">Stat leaders</a></li><li><a href=\"#teams\">Teams</a></li><li><a href=\"#events\">Events</a></li><li><a href=\"#matchups\">Matchups</a></li><li><a href=\"#odds\">State bracket odds</a></li></ul></div>\n  <div><h2>About</h2><ul><li><a href=\"#accuracy\">How accurate is it?</a></li><li><a href=\"#home\">How to read the numbers</a></li></ul><p style=\"margin-top:8px\">Missing results or a correction? Email <a href=\"mailto:contactwrestlelive@gmail.com?subject=Wrestle%20Live%20Rankings\">contactwrestlelive@gmail.com</a> with your tournament's final results or what needs fixed.</p></div>\n  <div class=\"foot-host\"><p><strong>Running a tournament?</strong> wrestle.live hosts brackets, live results and registration for tournament directors.</p><a class=\"btn\" href=\"https://wrestle.live/\" target=\"_blank\" rel=\"noopener\">Host on wrestle.live<span aria-hidden=\"true\"> \u2197</span><span class=\"sr\"> (opens in a new tab)</span></a></div>\n</div></footer>\n\n");

(function(){
  const S = {season:null, g:'M', div:'all', grade:'all', wt:157, showAll:false, asof:'final',
             pSeason:null, pg:'M', tSeason:null, tg:'M', tdiv:'all', tAll:false, team:null, tmSeason:null, tmG:'M',
             eSeason:null, etype:'all', eg:'all', event:null, evWt:null, wid:null, mSeason:null, ca:null, cb:null,
             oSeason:null, oDiv:'I', oWt:null};
  let ROWS=[], META=null, TEAMS=[], EVENTS=[], ODDS=null, MSROWS=[];
  const STATES = {AL:'Alabama',AZ:'Arizona',AR:'Arkansas',CA:'California',CO:'Colorado',CT:'Connecticut',DE:'Delaware',FL:'Florida',GA:'Georgia',ID:'Idaho',IL:'Illinois',IN:'Indiana',IA:'Iowa',KS:'Kansas',KY:'Kentucky',LA:'Louisiana',ME:'Maine',MD:'Maryland',MA:'Massachusetts',MI:'Michigan',MN:'Minnesota',MS:'Mississippi',MO:'Missouri',MT:'Montana',NE:'Nebraska',NV:'Nevada',NH:'New Hampshire',NJ:'New Jersey',NM:'New Mexico',NY:'New York',NC:'North Carolina',ND:'North Dakota',OH:'Ohio',OK:'Oklahoma',OR:'Oregon',PA:'Pennsylvania',RI:'Rhode Island',SC:'South Carolina',SD:'South Dakota',TN:'Tennessee',TX:'Texas',UT:'Utah',VT:'Vermont',VA:'Virginia',WA:'Washington',WV:'West Virginia',WI:'Wisconsin',WY:'Wyoming',ON:'Ontario'};
  const SERIES=new Map();   // the same event across seasons
  const BYID=new Map(), TBY=new Map(), EVBY=new Map(), SEASON={}, WEEK={}, MSBY=new Map();
  const AWAY = new Map();                       // team id -> home state, for teams outside Ohio (searched in their own group)
  const away = x => AWAY.has(x.tid);
  const hasProfile = id => BYID.has(id) || MSBY.has(id);
  // FULL: every season is loaded (the app starts on the current seasons alone). NOW_S: the seasons that are complete from the start.
  let FULL = false, NOW_S = new Set(), fullReady = Promise.resolve(), FULLFAIL = false;
  let WMOVED = null; const loadWMoved = () => WMOVED ||= fetch('wmoved.json').then(r=>r.ok?r.json():{}).catch(()=>({}));     // merged wrestler ids -> the record they joined
  const oldSeason = s => !FULL && /^\d{4}-\d{2}$/.test(s || '') && !NOW_S.has(s);
  const needsAll = h => { let p = String(h||'').replace(/^#/,'').split('/'); const v = ({p4p:'rankings', compare:'sim', matchups:'sim'})[p[0]] || p[0];
    if (v==='search' || p.some(oldSeason)) return true;
    if (v==='wrestler' && p[1] && !BYID.has(+p[1]) && !MSBY.has(+p[1])) return true;
    if (v==='team' && p.includes('history')) return true;
    if (v==='event' && p[1] && EVBY.has(+p[1]) && oldSeason(EVBY.get(+p[1]).season)) return true;
    if ((p[0]==='compare' || (v==='sim' && p[1]==='w')) && p.slice(1).some(x=>/^\d+$/.test(x) && !BYID.has(+x) && !MSBY.has(+x))) return true;
    return false; };
  // a list drawn for an earlier season before the history is in: wait, then draw again
  const waitAll = (season, again, box) => { if (!oldSeason(season)) return false; if (box) box.innerHTML = '<tr><td colspan="9" class="loading">Loading earlier seasons…</td></tr>'; fullReady.then(again); return true; };
  const $ = id => document.getElementById(id);
  const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  const ord = n => { const s=['th','st','nd','rd'], v=n%100; return n+(s[(v-20)%10]||s[v]||s[0]); };
  const pct = (w,l) => (w+l) ? (100*w/(w+l)).toFixed(1) : '–';
  const dash = '<span class="sub">–</span>';
  const placeChip = p => p == null ? dash : `<span class="chip ${p<=3?'p'+p:''}" title="${p===1?'State champion':'State '+ord(p)}">${ord(p)}</span>`;
  const fmtN = n => n==null ? '–' : Number(n).toLocaleString();
  const fmtS = n => n==null ? '–' : String(Math.round(n));   // ratings and P4P Scores are shown without thousands separators
  /* class year next to a high school season, when the grade is known (see README: grade) */
  const YR = {7:['7th','7th grade'], 8:['8th','8th grade'], 9:['9th','9th grade'], 10:['10th','10th grade'], 11:['11th','11th grade'], 12:['12th','12th grade']};
  const yrChip = g => YR[g] ? ` <span class="chip" title="${YR[g][1]}"><span aria-hidden="true">${YR[g][0]}</span><span class="sr">${YR[g][1]}</span></span>` : '';
  const placeText = p => p == null ? '' : (p===1 ? 'State champ' : 'State '+ord(p));
  const RTL = {fall:'Fall', tf:'TF', md:'MD', dec:'Dec', sv:'OT', dq:'DQ', ff:'Forfeit', mff:'Med. FF', inj:'Inj. def.', bye:'Bye'};
  const evType = e => e.lv==='MS' ? 'Middle school' : (TYPEL[e.type]||e.type);
  const postS = e => !!e && e.lv !== 'MS' && ['sectional','district','state'].includes(e.type);     // OHSAA's postseason: its logo stands in for a host
  const OHSAA_IMG = '<img src="logos/ohsaa.webp" alt="" width="64" height="64" loading="lazy">';
  const TYPEL = {tournament:'Tournament', dual:'Dual meet', sectional:'Sectional', district:'District', state:'State'};
  const evTag = e => `<span class="et et-${e.lv==='MS' ? 'ms' : esc(e.type)}">${esc(evType(e))}</span>${e.g==='F' ? ' <span class="sub">girls</span>' : ''}`;
  const PLACE_R = {'First Place':[1,2],'First Place Final':[1,2],'First Place Finals':[1,2],'Third Place':[3,4],'Third Place Finals':[3,4],'Fifth Place':[5,6],'Fifth Place Finals':[5,6],'Seventh Place':[7,8],'Seventh Place Finals':[7,8]};
  // placement rounds, including pool formats ('Seventh Place - Two Pools', 'First Place - Pool 16')
  const PLACE_W = {first:1,'1st':1,third:3,'3rd':3,fifth:5,'5th':5,seventh:7,'7th':7,ninth:9,'9th':9,eleventh:11,'11th':11};
  const placePair = r => { if (!r) return null; if (PLACE_R[r]) return PLACE_R[r];
    const m = r.trim().match(/^(first|1st|third|3rd|fifth|5th|seventh|7th|ninth|9th|eleventh|11th)\s+place\b/i);
    if (!m) return null; const p = PLACE_W[m[1].toLowerCase()]; return [p, p+1]; };
  const ROUND_ORDER = ['First Place','First Place Final','First Place Finals','Third Place','Third Place Finals','Fifth Place','Fifth Place Finals','Seventh Place','Seventh Place Finals',
    'Semifinal','Championship Semifinals','Consolation Semifinal','Consolation Semifinals','Quarterfinal','Championship Quarterfinals','Third Consolation','Consolation Quarterfinals',
    'Second Consolation','Consolation Round Two','First Consolation','Consolation Round One','First Round','Championship Preliminaries'];
  /* where a round falls in an event's day, for listing one wrestler's bouts latest first (null = can't tell) */
  const RD_N = {first:1, second:2, third:3, fourth:4, fifth:5, sixth:6, seventh:7, eighth:8, ninth:9, tenth:10};
  const rdStage = r => { r = String(r||'').toLowerCase().trim(); let m;
    if (/^(first place|1st place|finals?\b|championship( finals?)?( ·|$))/.test(r)) return 100;
    if (/^(third|3rd) place/.test(r)) return 82;
    if (/^(fifth|5th) place/.test(r)) return 81;
    if (/^(seventh|7th|ninth|9th|eleventh|11th|thirteenth|13th) place/.test(r)) return 80;
    if (/^cons(olation|\.)? semi/.test(r)) return 70;
    if (/semifinal|^semis?\b|^uppersf|^midsf/.test(r)) return 60;
    if (/^cons(olation|\.)? quarter/.test(r)) return 52;
    if ((m = /^(\w+) consolation$/.exec(r)) && RD_N[m[1]]) return [0, 20, 40, 50, 54, 56, 58][RD_N[m[1]]] ?? 59;
    if ((m = /^cons(?:olation|\.)? round (\w+)/.exec(r))) { const n = RD_N[m[1]] || +m[1] || ({one:1, two:2, three:3, four:4})[m[1]]; return n ? [0, 20, 40, 50, 54, 56, 58][n] ?? 59 : null; }
    if (/quarterfinal|^quarters?\b|^upperqf/.test(r)) return 30;
    if (/preliminar/.test(r)) return 5;
    if ((m = /^(\w+) round$/.exec(r)) && RD_N[m[1]]) return RD_N[m[1]] === 1 ? 10 : 20 + RD_N[m[1]];
    if ((m = /^(?:champ\.?|championship|pool)? ?round (\d+)/.exec(r))) return +m[1] === 1 ? 10 : 20 + +m[1];
    return null; };
  const hW = id => `#wrestler/${id}`, hT = (tid, s, g) => `#team/${tid}` + (s ? `/${s}/${g}` : ''), hE = eid => `#event/${eid}`;
  const wlink = (id, name) => hasProfile(id) ? `<a class="lnk" href="${hW(id)}">${esc(name)}</a>` : `<span class="hl" style="font-weight:600">${esc(name)}</span>`;
  const tlink = (tid, name) => tid && TBY.has(tid) ? `<a class="lnk plain" href="${hT(tid)}">${esc(name)}</a>` : esc(name);
  /* event names as results write them ("Sect. Tournament: Div. II - Galion (bracket PDF)") -> "Sectional: Division II · Galion" */
  const evName = n => String(n||'').replace(/\s*\(bracket PDF\)/i,'').replace(/^Sect\.? Tournament:\s*/i,'Sectional: ').replace(/^Dist\.? Tournament:\s*/i,'District: ')
    .replace(/\bDiv\.\s*/g,'Division ').replace(/\s+-\s+/g,' · ').trim();
  const RNAME = {'First Place':'Final','Third Place':'3rd place match','Fifth Place':'5th place match','Seventh Place':'7th place match'};
  const rdName = r => RNAME[r] || r;
  const elink = (eid, name) => `<a class="lnk" href="${hE(eid)}">${esc(evName(name))}</a>`;
  const sl = parts => `<div class="subline">${parts.filter(Boolean).join(' · ')}</div>`;
  const fmtDate = d => d ? new Date(d+'T12:00:00').toLocaleDateString('en-US',{month:'short',day:'numeric',year:'numeric'}) : '';
  const fmtShort = d => d ? new Date(d+'T12:00:00').toLocaleDateString('en-US',{month:'short',day:'numeric'}) : '';
  const arrow = (pr, rk) => pr==null ? '<span class="chip">new</span>' : pr===rk ? `${dash}<span class="sr">no change</span>` : pr>rk ? `<span class="up"><span aria-hidden="true">▲</span><span class="sr">up </span>${pr-rk}</span>` : `<span class="down"><span aria-hidden="true">▼</span><span class="sr">down </span>${rk-pr}</span>`;
  const score = (t, s) => { s = String(s||'').replace(/^(md|tf)\s*/i,''); if (/^(default|forfeit|bye|dq|dff|inj)/i.test(s)) s=''; return `${RTL[t]||''} <span class="sub">${esc(s)}</span>`; };
  const empty = (cols, msg) => `<tr><td colspan="${cols}" class="sub">${msg}</td></tr>`;

  function seg(el, items, cur, on){
    const had = el.contains(document.activeElement);
    el.innerHTML = items.map(([v,l]) => `<button type="button" data-v="${v}" aria-pressed="${String(v)===String(cur)}">${l}</button>`).join('');
    if (had) el.querySelector('[aria-pressed="true"]')?.focus({preventScroll:true});
    el.onclick = e => { const b = e.target.closest('button'); if (b) on(b.dataset.v); };
  }
  function pills(el, list, cur, attr, on){
    const had = el.contains(document.activeElement);
    setTimeout(()=>{ if (had) el.querySelector('[aria-pressed="true"]')?.focus({preventScroll:true}); }, 0);
    el.innerHTML = list.length ? list.map(w=>`<button type="button" data-${attr}="${w}" aria-pressed="${w===cur}">${w}</button>`).join('') : '<span class="sub">No weights.</span>';
    el.onclick = e => { const b=e.target.closest('button'); if(b) on(+b.dataset[attr]); };
    const on_ = el.querySelector('[aria-pressed="true"]'); if (on_ && el.scrollWidth > el.clientWidth) on_.scrollIntoView({block:'nearest', inline:'center'});
  }
  function seasonOpts(el, list, cur){ el.innerHTML = list.map(s=>`<option ${s===cur?'selected':''}>${s}</option>`).join(''); }
  function loadSeason(season, lv){
    const key = (lv==='MS'?'MS:':'') + season;
    if (!SEASON[key]) SEASON[key] = fetch((lv==='MS'?'m/':'s/')+season+'.json').then(r=>r.ok?r.json():{rt:[],rounds:[],names:{},teams:{},bouts:[]}).then(d=>{
      d.byEvent = new Map(); d.byW = new Map(); d.byTeam = new Map();
      for (const b of d.bouts){ const [e,,,w,l,wt,lt]=b;
        (d.byEvent.get(e) || d.byEvent.set(e,[]).get(e)).push(b);
        for (const x of [w,l]) (d.byW.get(x) || d.byW.set(x,[]).get(x)).push(b);
        for (const t of new Set([wt,lt])) (d.byTeam.get(t) || d.byTeam.set(t,[]).get(t)).push(b); }
      return d; });
    return SEASON[key];
  }
  const loadWeekly = s => WEEK[s] ||= fetch('w/'+s+'.json').then(r=>r.json());
  let SCHOOLS_READY = null; let SCHOOLS = null; let LOGOS = {};
  /* school changes: {wid: {c: [[tid, name, fromSeason, toSeason]...], s: {season: [[tid, name, bouts, firstDate, lastDate]...]}}} */
  let MOVES = null, MV = {}; const loadMoves = () => MOVES ||= fetch('moves.json').then(r=>r.ok?r.json():{}).catch(()=>({})).then(m=>(MV = m));
  const fmtMD = d => d ? new Date(d+'T12:00:00').toLocaleDateString('en-US',{month:'short', day:'numeric'}) : '';
  const schoolSeq = (gs, link=true) => gs.map(g=>`<span class="nw">${link ? tlink(g[0], g[1]) : esc(g[1])}</span>`).join(' <span aria-hidden="true">→</span><span class="sr">then</span> ');
  /* school badge: the logo if we have one, else initials in the school's colors (decorative; the name is always shown as text) */
  const teamIni = n => { const w = (n||'').replace(/^(?!St\.|Mt\.)[A-Z][A-Za-z]{0,6}\.\s+(?=\S)/,'').split(/[\s-]+/).filter(x=>/^[A-Za-z]/.test(x));
    return (w.length > 1 ? w[0][0] + w[1][0] : (w[0]||'?')[0]).toUpperCase(); };
  const TIDN = new Map();   // team name -> id, for rows that carry only a name
  const badge = (tid, name, cls='') => {
    if (tid == null && name) tid = TIDN.get(name);
    if (LOGOS[tid]) return `<span class="sb lb ${cls}" aria-hidden="true"><img src="logos/${LOGOS[tid]}" alt="" loading="lazy" width="64" height="64"></span>`;
    const h = SCHOOLS_READY && SCHOOLS_READY[tid] && SCHOOLS_READY[tid][3], c0 = h && h[0], c1 = h && h[1] && h[1].toLowerCase() !== c0.toLowerCase() ? h[1] : null;
    return `<span class="sb ${cls}" aria-hidden="true"${c0 ? ` style="background:${c0};color:${inkOn(c0)}${c1 ? `;box-shadow:inset 0 0 0 2px ${c1}` : ''}"` : ''}>${esc(teamIni(name))}</span>`; };
  const logoImg = (tid, cls='') => LOGOS[tid] ? `<img class="logo ${cls}" src="logos/${LOGOS[tid]}" alt="" loading="lazy" width="64" height="64">` : ''; const loadSchools = () => SCHOOLS ||= Promise.all([fetch('schools.json').then(r=>r.ok?r.json():{}), fetch('logos.json').then(r=>r.ok?r.json():{})]).then(([s,l])=>{ LOGOS = l; return s; }).catch(()=>({}));
  const loadOdds = () => ODDS ||= fetch('odds.json').then(r=>r.json());
  // a team's OHSAA division in a season (realigned every two years). No season: the projected season's (OHSAA's
  // published alignment, META.pre_div), else the latest season's.
  const divOf = (tid, season) => {
    if ((!season || season===META.pre_season) && META.pre_div && META.pre_div[tid]) return META.pre_div[tid];
    const t = TBY.get(tid) || []; const r = season ? t.find(x=>x.season===season) : null;
    return (r || t.at(-1) || {}).div ?? null; };

  /* ---------- home ---------- */
  function renderHome(){
    { const ls = META.seasons.at(-1), wk = ((META.weekly||{})[ls]||[]).at(-1);
      $('q-movers').hidden = !(wk && (Date.now() - new Date(wk+'T12:00:00')) < 10*864e5);
      $('q-odds').hidden = !POST; }
    if ($('q-pre')){ const ps = META.pre_season; $('q-pre').hidden = !ps || ((META.weekly||{})[ps]||[]).length > 0; if (ps) $('q-pre').textContent = ps+' preseason rankings'; }
    const latest = META.seasons[META.seasons.length-1];
    renderFollowing(); renderWeek();
    const bt = Object.entries(META.backtest||{}).filter(([s])=>s>='2021-22');
    const acc = bt.length ? bt.reduce((s,[,v])=>s+(v.blend_acc??v.acc)*v.n,0)/bt.reduce((s,[,v])=>s+v.n,0) : null;
    $('h-lede').textContent = `Ratings, career histories and state bracket odds from ${fmtN(META.bouts)} high school and middle school bouts, ${META.seasons[0]} to ${latest}. Updated through the season.`
      + (META.youth && META.youth.events ? ' Youth events run on wrestle.live get brackets and records, never ratings.' : '');
    const YT = META.youth && META.youth.events ? META.youth : null;     // youth results from events run on wrestle.live: on the site, never rated
    if (YT) $('h-eye').textContent = 'Now covering Ohio · high school, middle school and youth · boys and girls';
    $('h-strip').innerHTML = [[fmtN(META.bouts + (YT ? YT.bouts : 0)),'bouts in the database'],
      [fmtN(META.wrestlers + (YT ? YT.wrestlers : 0)),'wrestlers with a profile'],[META.seasons.length,`seasons, ${META.seasons[0]} to ${latest}`],
      [acc?(100*acc).toFixed(1)+'%':'–','of state bouts picked correctly since 2021-22']]
      .map(([v,s],i)=>`<div><div class="big"${i===3?' style="color:var(--good)"':''}>${v}</div><div class="s">${s}</div></div>`).join('');
    const p4 = g => ROWS.filter(r=>r.season===latest&&r.g===g&&r.ranked&&r.pp!=null).sort((a,b)=>b.pp-a.pp);
    const boys = p4('M'), girls = p4('F'), ex = {name:'Sample wrestler', r:2450, rd:60, pp:1180};   // made-up example, not a real athlete
    $('h-explain').innerHTML = `<article><div><h3>Rating</h3><p>How strong a wrestler is right now, built from every bout we have. Beating a higher-rated opponent moves you up more than beating a lower-rated one, and a pin counts more than a decision. The ± is how sure we are; it narrows the more you wrestle.</p></div>
        <div><div class="num">${ex?fmtS(ex.r):'–'}</div><div class="sub" style="font-size:13px;text-align:right">±${ex?ex.rd:''} · ${ex?esc(ex.name):''}</div></div></article>
      <article><div><h3>P4P Score</h3><p>Puts every weight class on one scale so a 106-pounder and a heavyweight can be compared. 500 is a typical state qualifier for that season and weight; 1,000 is a typical state champion.</p></div>
        <div><div class="num">${ex?fmtS(ex.pp):'–'}</div><div class="sub" style="font-size:13px;text-align:right">${ex?esc(ex.name):''}</div></div>
        <div class="scale" aria-hidden="true"><div class="trk"></div><i style="left:33.3%"></i><i style="left:66.7%"></i><span style="left:33.3%">500 · state qualifier</span><span style="left:66.7%">1,000 · state champion</span>${ex?`<b style="left:${Math.min(98,100*ex.pp/1500).toFixed(1)}%"></b>`:''}</div></article>`;
    const li = (r,i) => `<li><span class="n">${i+1}</span><span class="whoflex">${badge(r.tid, r.team, 'm')}<span>${wlink(r.id,r.name)}<span class="sub" style="display:block;font-size:13px">${esc(r.team)} · ${r.wt} lbs${r.place?`<br><span class="chip ${r.place<=3?'p'+r.place:''} champtag sm">${r.place===1?'State champ':r.place===2?'State runner-up':'State '+ord(r.place)}</span>`:''}</span></span></span><span class="v">${fmtS(r.pp)}<small>P4P Score</small></span></li>`;
    const teams = TEAMS.filter(t=>t.season===latest&&t.g==='M'&&t.rank).sort((a,b)=>a.rank-b.rank).slice(0,5);
    seg($('h-g'), [['M','Boys'],['F','Girls']], S.hg||'M', v=>{ S.hg=v; renderHome(); });
    // before the new season's first weekly list, the No. 1s come from the preseason projection
    const PREH = META.pre_season && !((META.weekly||{})[META.pre_season]||[]).length;
    if (PREH && !PRE_READY){ loadPre().then(d=>{ PRE_READY = d; if (!$('v-home').hidden) renderHome(); }); }
    let ones;
    if (PREH && PRE_READY){
      const best = new Map(); for (const r of PRE_READY.list) if (r.g===(S.hg||'M') && !AWAY.has(r.tid) && (!best.has(r.wt) || r.r > best.get(r.wt).r)) best.set(r.wt, r);
      ones = [...best.values()].sort((a,b)=>a.wt-b.wt).map(r=>({...r, place:r.lastPlace}));
    } else ones = PREH ? [] : ROWS.filter(r=>r.season===latest && r.g===(S.hg||'M') && r.ranked && r.rank===1).sort((a,b)=>a.wt-b.wt);
    $('h-ones').innerHTML = PREH ? `No. 1 at every weight · ${esc(META.pre_season)} <span class="chip prov" style="vertical-align:middle">Projected</span>` : `No. 1 at every weight · ${esc(latest)}`;
    $('h-ones-sub').textContent = PREH ? `Preseason projection from ${META.pre_season ? META.sim_next_from : ''} results. Chips show last season's state finish. Updates once the season's first results are in.` : '';
    // a season being wrestled: say how fresh the list is
    const LIVE = !PREH && META.sim_live && META.sim_next === latest, through = LIVE ? EVENTS.reduce((m,e)=>e.season===latest && e.date > m ? e.date : m, '') : '';
    if (LIVE && through) $('h-ones-sub').textContent = `Results through ${fmtDate(through)}. Rankings move as each week's results come in.`;
    $('h-ones-sub').hidden = !PREH && !(LIVE && through);
    $('h-ones-all').href = PREH ? '#rankings/pre' : ones.length ? `#rankings/HS/${latest}/${S.hg||'M'}/${ones[0].wt}` : '#rankings';
    $('h-onesgrid').innerHTML = ones.map(r=>`<a href="${hW(r.id)}"><span class="top"><span class="wt">${r.wt}<small>lbs</small></span>${badge(r.tid, r.team, 'l')}</span><span class="nm">${esc(r.name)}</span><span class="tm" title="${esc(r.team)}">${esc(r.team)}</span><span class="ft">${r.place?`<span class="chip ${r.place<=3?'p'+r.place:''} champtag">${r.place===1?'State champ':r.place===2?'State runner-up':'State '+ord(r.place)}</span>`:''}<span class="rt">${fmtS(r.r)}<small>rating</small></span></span></a>`).join('');
    // before the new season's first weekly list, the leaders come from the preseason projection too
    const PL = PREH && PRE_READY;
    // short headings so the three cards line up; the season (and the Projected tag) sit on a small line underneath
    const tag = `<span class="ch-sea">${PL ? `${esc(META.pre_season)} <span class="chip prov">Projected</span>` : esc(latest)}</span>`;
    let pB = boys, pG = girls, tm = teams;
    if (PL){
      const pp = g => PRE_READY.list.filter(r=>r.g===g && r.pp!=null && !AWAY.has(r.tid)).sort((a,b)=>b.pp-a.pp).map(r=>({...r, place:r.lastPlace}));
      pB = pp('M'); pG = pp('F');
      const ci = Object.fromEntries((PRE_READY.teamcols||[]).map((c,i)=>[c,i]));
      tm = (PRE_READY.teamrank||[]).filter(r=>r[ci.g]==='M').slice(0,5).map(r=>({tid:r[ci.tid], name:(TBY.get(r[ci.tid])||[]).at(-1)?.name || r[ci.name], lineup_pp:r[ci.lineup_pp],
        placers:r[ci.placers], projected:r[ci.projected], div:divOf(r[ci.tid])}));
    }
    const teamSub = t => PL ? `${t.div?'D-'+esc(t.div)+' · ':''}${t.placers} returning placer${t.placers===1?'':'s'}`
      : `${t.div?'D-'+esc(t.div)+' · ':''}${t.sq} state qualifier${t.sq===1?'':'s'}${t.champs?` · ${t.champs} champ${t.champs===1?'':'s'}`:''}`;
    $('h-leaders').innerHTML = `<div class="card"><div class="card-head"><h2>Boys pound-for-pound${tag}</h2><a class="lnk" href="${PL ? '#rankings/p4p' : `#p4p/${latest}/M`}">Full list</a></div><ol>${pB.slice(0,5).map(li).join('')}</ol></div>
      <div class="card"><div class="card-head"><h2>Girls pound-for-pound${tag}</h2><a class="lnk" href="${PL ? '#rankings/p4p' : `#p4p/${latest}/F`}">Full list</a></div><ol>${pG.slice(0,5).map(li).join('')}</ol></div>
      <div class="card"><div class="card-head"><h2>Boys team rankings${tag}</h2><a class="lnk" href="${PL ? '#teams/pre/M' : '#teams'}">All teams</a></div><ol>${tm.map((t,i)=>`<li><span class="n">${i+1}</span><span class="whoflex">${badge(t.tid, t.name, 'm')}<span><a class="lnk" href="${PL ? hT(t.tid) : hT(t.tid,t.season,t.g)}">${esc(t.name)}</a><span class="sub" style="display:block;font-size:13px">${teamSub(t)}</span></span></span><span class="v">${fmtN(t.lineup_pp)}<small>Strength</small></span></li>`).join('')}</ol></div>`;
  }

  /* ---------- rankings ---------- */
  function weightsFor(season, g){ return [...new Set(ROWS.filter(r=>r.season===season&&r.g===g&&r.ranked&&r.wt).map(r=>r.wt))].sort((a,b)=>a-b); }
  async function renderRankings(){
    S.rview = S.rview || (S.level==='MS' ? 'ms' : 'w');
    S.level = S.rview==='ms' ? 'MS' : 'HS';
    if (S.level==='HS' && waitAll(S.season, ()=>{ if (!$('v-rankings').hidden) renderRankings(); }, $('r-body'))){ $('r-podium').hidden = true; $('r-movers').hidden = true; return; }
    const MS = S.level==='MS', P4P = S.rview==='p4p';
    seg($('r-views'), [['w','By weight'],['p4p','Pound-for-pound'],['ms','Middle school']], S.rview, v=>{ S.rview=v; S.showAll=false; S.hl=null;
      history.replaceState(null,'', v==='ms'?'#rankings/MS':v==='p4p'?'#rankings/p4p':'#rankings'); renderRankings(); });
    $('r-asof').parentElement.hidden = MS || P4P; $('r-div').hidden = MS; $('r-weights').hidden = P4P;
    const GOPT = MS ? [['all','All grades'],['7','7th'],['8','8th']] : [['all','All grades'],['9','9th'],['10','10th'],['11','11th'],['12','12th']];
    if (!GOPT.some(([v])=>v===S.grade)) S.grade = 'all';
    $('r-gnote').hidden = S.grade === 'all';
    $('r-gnote').textContent = MS
      ? 'Middle school grade is known when a wrestler has two straight middle school seasons (7th, then 8th) or a known high school grade. A first-year middle schooler can only be placed once the next season is in, so this season mostly shows 8th graders. Wrestlers without a known grade are left out when a grade is picked.'
      : 'Grade comes from the OHSAA state pairings, middle school records and full four-season careers, so it is known for about half of ranked wrestlers. Wrestlers without a known grade are left out when a grade is picked.';
    $('r-eyebrow').textContent = MS ? 'Ohio middle school · statewide' : P4P ? 'Ohio high school · every weight on one scale' : 'Ohio high school · statewide';
    $('r-lede').innerHTML = P4P ? '<strong>P4P Score</strong> puts every weight on one scale, so the best wrestlers in the state can be ranked together: 500 is that season\'s typical state qualifier at the weight, 1,000 a typical state champion.' : MS ? '<strong>Rating</strong> is how strong a wrestler is right now, built from every middle school bout we have; the ± is how sure it is. Middle school ratings are their own pool, so compare them with each other, not with high school.'
      : '<strong>Rating</strong> is how strong a wrestler is right now, built from every bout we have; the ± is how sure it is. <strong>P4P Score</strong> puts every weight on one scale: 500 is a typical state qualifier, 1,000 a typical state champion.';
    if (MS){ if (!META.ms_seasons.includes(S.season)) S.season = META.ms_seasons.at(-1); S.asof='final'; }
    if (S.season==='pre' && (MS || !META.pre_season)){ S.preBack = !!META.pre_season; S.season = META.seasons.at(-1); }
    else if (!MS && S.preBack){ S.preBack = false; S.season = 'pre'; }   // back to the preseason list after a look at middle school
    const PRE = S.season==='pre';
    // seasons with only the state tournament in our results (1999-00 to 2010-11) have no real ranking: a wrestler
    // shows as ranked only by wrestling 6 state bouts. Those seasons stay on event, wrestler and team pages.
    const RS = MS ? META.ms_seasons : rankSeasons();
    if (!MS && S.season!=='pre' && !RS.includes(S.season)) S.season = RS.at(-1);
    seasonOpts($('r-season'), RS.slice().reverse(), S.season);
    if (!MS && META.pre_season) $('r-season').insertAdjacentHTML('afterbegin', `<option value="pre" ${PRE?'selected':''}>${META.pre_season} preseason</option>`);
    $('r-asof').parentElement.hidden = MS || P4P || PRE;
    const weeks = (META.weekly||{})[S.season] || [];
    if (S.asof!=='final' && !weeks.includes(S.asof)) S.asof='final';
    $('r-asof').innerHTML = `<option value="final" ${S.asof==='final'?'selected':''}>End of season</option>` + weeks.slice().reverse().map(w=>`<option value="${w}" ${w===S.asof?'selected':''}>Week of ${fmtShort(w)}</option>`).join('');
    seg($('r-gender'), [['M','Boys'],['F','Girls']], S.g, v=>{S.g=v; S.showAll=false; renderRankings();});
    seg($('r-div'), [['all','All'],['I','D-I'],['II','D-II'],['III','D-III']], S.div, v=>{S.div=v; S.showAll=false; renderRankings();});
    seg($('r-grade'), GOPT, S.grade, v=>{S.grade=v; S.showAll=false; renderRankings();});
    const grTxt = g => g ? ord(g)+' grade' : '';
    let gradeOf = r => r.gr ?? null, before = 0, known = 0;
    const byGrade = l => { before = l.length; known = l.filter(r=>gradeOf(r)!=null).length; return S.grade==='all' ? l : l.filter(r=>gradeOf(r)===+S.grade); };
    let list, ws, rowsHtml, head, cols;
    if (P4P && PRE){
      // projected pound-for-pound: each wrestler's projected rating at the projected weight, on last season's scale
      $('r-movers').hidden = true; ws = [];
      const P = await loadPre(); if (S.season !== 'pre' || S.rview !== 'p4p') return;
      list = P.list.filter(r=>r.g===S.g && r.pp!=null && !AWAY.has(r.tid));
      if (S.div!=='all') list = list.filter(r=>r.div===S.div);
      list = byGrade(list).sort((a,b)=>b.pp-a.pp).map((r,i)=>({...r, rank:i+1}));
      cols = 7;
      const top = list.length ? list[0].pp : 1;
      const lastTxt = r => r.proj==='F' ? 'Incoming freshman' : [r.lastWt+' lbs', r.lastRank?'#'+r.lastRank:'', placeText(r.lastPlace)].filter(Boolean).join(' · ');
      head = `<tr><th>#</th><th>Wrestler</th><th class="lg">School</th><th class="num lg">Projected weight</th><th class="num">Projected P4P</th><th class="num lg">Projected rating</th><th class="lg">${esc(P.from)}</th></tr>`;
      rowsHtml = r => `<td class="who"><div class="whoflex">${badge(r.tid, r.team)}<div>${wlink(r.id,r.name)}${r.proj==='F'?' <span class="chip">Incoming freshman</span>':''}${sl([esc(r.team||''), r.wt+' lbs', grTxt(r.gr)])}</div></div></td>
        <td class="lg">${tlink(r.tid, r.team||'')}</td><td class="num lg">${r.wt}</td>
        <td class="num" style="white-space:nowrap"><span class="bar lg" aria-hidden="true" style="width:110px"><span style="width:${Math.round(100*r.pp/(top||1))}%"></span></span><strong>${fmtS(r.pp)}</strong></td>
        <td class="num lg">${r.r} <span class="sub">±${r.rd}</span></td><td class="lg sub">${esc(lastTxt(r))}</td>`;
    } else if (P4P){
      $('r-movers').hidden = true; ws = [];
      list = ROWS.filter(r=>r.season===S.season&&r.g===S.g&&r.ranked&&r.pp!=null);
      if (S.div!=='all') list = list.filter(r=>r.div===S.div);
      list = byGrade(list).sort((a,b)=>b.pp-a.pp).map((r,i)=>({...r, wrank:r.rank, rank:i+1}));
      cols = 8;
      const top = list.length ? list[0].pp : 1;
      head = '<tr><th>#</th><th>Wrestler</th><th class="lg">School</th><th class="num lg">Weight</th><th class="num">P4P Score</th><th class="num lg">Rating</th><th class="num lg">At weight</th><th class="lg">State</th></tr>';
      rowsHtml = r => `<td class="who"><div class="whoflex">${badge(r.tid, r.team)}<div>${wlink(r.id,r.name)}${sl([esc(r.team), r.wt+' lbs', grTxt(r.gr), placeText(r.place)])}</div></div></td>
        <td class="lg">${tlink(r.tid,r.team)}</td><td class="num lg"><a class="lnk plain" href="#rankings/HS/${r.season}/${r.g}/${r.wt}/${r.id}">${r.wt}</a></td>
        <td class="num" style="white-space:nowrap"><span class="bar lg" aria-hidden="true" style="width:110px"><span style="width:${Math.round(100*r.pp/(top||1))}%"></span></span><strong>${fmtS(r.pp)}</strong></td>
        <td class="num lg">${fmtS(r.r)}</td><td class="num lg">#${r.wrank}</td><td class="lg">${placeChip(r.place)}</td>`;
    } else if (MS){
      $('r-movers').hidden = true;
      const cnt = new Map(); for (const r of MSROWS) if (r.season===S.season && r.g===S.g && r.ranked) cnt.set(r.wt, (cnt.get(r.wt)||0)+1);
      ws = [...cnt.entries()].filter(([,n])=>n>=8).map(([w])=>w).sort((a,b)=>a-b);
      if (!ws.includes(S.wt)) S.wt = ws.reduce((a,b)=>Math.abs(b-S.wt)<Math.abs(a-S.wt)?b:a, ws[0]);
      list = MSROWS.filter(r=>r.season===S.season&&r.g===S.g&&r.wt===S.wt&&r.ranked).sort((a,b)=>a.rank-b.rank);
      list = byGrade(list);
      cols = 7;
      const lo = Math.min(...list.slice(0,25).map(r=>r.r-r.rd)), hi = Math.max(...list.slice(0,25).map(r=>r.r+r.rd));
      const pos = x => Math.max(0, Math.min(100, 100*(x-lo)/((hi-lo)||1))).toFixed(1)+'%';
      head = '<tr><th>Rank</th><th>Wrestler</th><th class="num lg">Grade</th><th class="num">Record</th><th class="num lg">Win %</th><th>Rating<span class="lg"> and likely range</span></th><th class="num lg">Peak</th></tr>';
      rowsHtml = r => `<td class="who"><div class="whoflex">${badge(r.tid, r.team)}<div>${wlink(r.id,r.name)}<div class="sub" style="font-size:13px">${esc(r.team)}${r.gr?`<span class="smi"> · ${ord(r.gr)} grade</span>`:''}${BYID.has(r.id)?' · now in high school':''}</div></div></div></td>
        <td class="num lg">${r.gr ? ord(r.gr) : dash}</td><td class="num">${r.w}-${r.l}</td><td class="num lg">${pct(r.w,r.l)}</td>
        <td style="white-space:nowrap"><strong>${r.r}</strong> <span class="sub">±${r.rd}</span><span class="range lg" aria-hidden="true"><i style="left:${pos(r.r-r.rd)};width:${(100*2*r.rd/((hi-lo)||1)).toFixed(1)}%"></i><b style="left:calc(${pos(r.r)} - 2px)"></b></span></td>
        <td class="num lg">${r.peak}</td>`;
    } else if (PRE){
      $('r-movers').hidden = true;
      const P = await loadPre(); if (S.season !== 'pre') return;
      const all = P.list.filter(r=>r.g===S.g && !AWAY.has(r.tid));
      ws = [...new Set(all.map(r=>r.wt))].sort((a,b)=>a-b); if (!ws.includes(S.wt)) S.wt = ws.reduce((a,b)=>Math.abs(b-S.wt)<Math.abs(a-S.wt)?b:a, ws[Math.floor(ws.length/2)]);
      list = all.filter(r=>r.wt===S.wt).sort((a,b)=>b.r-a.r).map((r,i)=>({...r, rank:i+1}));
      if (S.div!=='all') list = list.filter(r=>r.div===S.div);
      list = byGrade(list);
      cols = 6;
      const lastTxt = r => r.proj==='F' ? 'Incoming freshman' : [r.lastWt+' lbs', r.lastRank?'#'+r.lastRank:'', placeText(r.lastPlace)].filter(Boolean).join(' · ');
      head = `<tr><th>Rank</th><th>Wrestler</th><th class="num lg">Grade</th><th class="lg">Div</th><th class="num">Projected rating</th><th class="lg">${esc(P.from)}</th></tr>`;
      rowsHtml = r => `<td class="who"><div class="whoflex">${badge(r.tid, r.team)}<div>${wlink(r.id,r.name)}${r.proj==='F'?' <span class="chip">Incoming freshman</span>':''}${r.from?` <span class="chip">Transfer from ${esc(r.from)}</span>`:''}${r.ps>=0.25?` <span class="chip" title="We don't know this wrestler's grade; about ${Math.round(100*r.ps)}% of wrestlers like this were seniors last season.">May have graduated</span>`:''}${sl([esc(r.team||''), grTxt(r.gr), r.proj==='F'?'':'last season '+lastTxt(r)])}</div></div></td>
        <td class="num lg">${r.gr ? ord(r.gr) : dash}</td><td class="lg">${r.div?`<span class="divb">${esc(r.div)}</span>`:dash}</td>
        <td class="num"><strong>${r.r}</strong> <span class="sub">±${r.rd}</span></td><td class="lg sub">${esc(lastTxt(r))}</td>`;
    } else if (S.asof==='final'){
      $('r-movers').hidden = true;
      ws = weightsFor(S.season, S.g); if (!ws.includes(S.wt)) S.wt = ws[Math.floor(ws.length/2)] ?? null;
      list = ROWS.filter(r=>r.season===S.season&&r.g===S.g&&r.wt===S.wt&&r.ranked).sort((a,b)=>a.rank-b.rank);
      if (S.div!=='all') list = list.filter(r=>r.div===S.div);
      list = byGrade(list);
      cols = 10;
      const lo = Math.min(...list.slice(0,25).map(r=>r.r-r.rd)), hi = Math.max(...list.slice(0,25).map(r=>r.r+r.rd));
      const pos = x => Math.max(0, Math.min(100, 100*(x-lo)/((hi-lo)||1))).toFixed(1)+'%';
      head = '<tr><th>Rank</th><th>Wrestler</th><th class="num lg">Grade</th><th class="lg">Div</th><th class="num lg">Record</th><th class="num lg">Win %</th><th>Rating<span class="lg"> and likely range</span></th><th class="num lg">Peak</th><th class="num">P4P</th><th class="lg">State</th></tr>';
      rowsHtml = r => `<td class="who"><div class="whoflex">${badge(r.tid, r.team)}<div>${wlink(r.id,r.name)}<div class="sub lg" style="font-size:13px">${esc(r.team)}</div>${sl([esc(r.team), grTxt(r.gr), `${r.w}-${r.l}`, placeText(r.place)])}</div></div></td>
        <td class="num lg">${r.gr ? ord(r.gr) : dash}</td>
        <td class="lg">${r.div?`<span class="divb">${esc(r.div)}</span>`:dash}</td>
        <td class="num lg">${r.w}-${r.l}</td><td class="num lg">${pct(r.w,r.l)}</td>
        <td style="white-space:nowrap"><strong>${r.r}</strong> <span class="sub">±${r.rd}</span><span class="range lg" aria-hidden="true"><i style="left:${pos(r.r-r.rd)};width:${(100*2*r.rd/((hi-lo)||1)).toFixed(1)}%"></i><b style="left:calc(${pos(r.r)} - 2px)"></b></span></td>
        <td class="num lg">${r.peak}</td>
        <td class="num"><strong>${r.pp ?? '–'}</strong></td><td class="lg">${placeChip(r.place)}</td>`;
    } else {
      const want = S.season+S.asof; const W = await loadWeekly(S.season); if (want !== S.season+S.asof) return;
      const rows = (W.ranks[S.asof]||[]).filter(r=>r[4]===S.g);
      ws = [...new Set(rows.map(r=>r[5]))].sort((a,b)=>a-b); if (!ws.includes(S.wt)) S.wt = ws[Math.floor(ws.length/2)] ?? null;
      list = rows.filter(r=>r[5]===S.wt).map(r=>({id:r[0],name:r[1],team:r[2],tid:r[3],r:r[6],rd:r[7],b:r[8],rank:r[9],pr:r[10],d:r[11],div:divOf(r[3], S.season),
        gr:(BYID.get(r[0])||[]).find(x=>x.season===S.season)?.gr ?? null, pv:!!r[12]}));
      if (S.div!=='all') list = list.filter(r=>r.div===S.div);
      list = byGrade(list);
      cols = 9;
      head = '<tr><th>Rank</th><th>Move</th><th>Wrestler</th><th class="lg">School</th><th class="num lg">Grade</th><th class="lg">Div</th><th class="num">Rating</th><th class="num lg">Week</th><th class="num lg">Bouts</th></tr>';
      rowsHtml = r => `<td>${arrow(r.pr,r.rank)}</td><td class="who"><div class="whoflex">${badge(r.tid, r.team)}<div>${wlink(r.id,r.name)}${r.pv?` <span class="chip prov" title="Provisional: ${r.b} bout${r.b>1?'s':''} so far this season. Until December 15, returning wrestlers are listed after 1 bout and new wrestlers after 3 so there is a list from the first weekend. The rank firms up at 4 bouts.">Provisional<span class="sr">: ${r.b} bout${r.b>1?'s':''} so far this season, rank firms up at 4</span></span>`:''}${sl([esc(r.team||''), grTxt(r.gr), r.b+(r.b===1?' bout':' bouts'), !r.d?'':(r.d>0?'+':'')+r.d+' this week'])}</div></div></td>
        <td class="lg">${(MS ? mtlink : tlink)(r.tid,r.team||'')}</td><td class="num lg">${r.gr ? ord(r.gr) : dash}</td><td class="lg">${r.div?esc(r.div):dash}</td>
        <td class="num"><strong>${r.r}</strong> <span class="sub lg">±${r.rd}</span></td>
        <td class="num lg">${r.d==null?dash:(r.d>0?'+':'')+r.d}</td><td class="num lg">${r.b}</td>`;
      const mvAll = (W.movers[S.asof]||[]).filter(m=>m[4]===S.g); const mv = mvAll.filter(m=>m[7]>m[6]).slice(0,5).concat(mvAll.filter(m=>m[7]<m[6]).slice(0,3));
      $('r-movers').hidden = !mv.length;
      $('r-movers').innerHTML = `<div class="card-head"><h2>Biggest movers this week</h2><span class="sub">All weights · rank change within the top 25</span></div><table><thead><tr><th>Move</th><th>Wrestler</th><th class="lg">School</th><th class="num lg">Wt</th><th class="num lg">Rank</th><th class="num">Rating</th></tr></thead><tbody>${
        mv.map(m=>`<tr><td style="width:56px">${arrow(m[7],m[6])}</td><td class="who"><div class="whoflex">${badge(m[3], m[2], 's')}<div>${wlink(m[0],m[1])}${sl([esc(m[2]||''), m[5]+' lbs', `#${m[7]} → #${m[6]}`])}</div></div></td><td class="lg sub">${esc(m[2]||'')}</td><td class="num lg">${m[5]}</td><td class="num lg">#${m[7]} → #${m[6]}</td><td class="num">${m[8]>0?'+':''}${m[8]}</td></tr>`).join('')}</tbody></table>`;
    }
    pills($('r-weights'), ws, S.wt, 'wt', w=>{ S.wt=w; S.showAll=false; renderRankings(); });
    $('r-head').innerHTML = head;
    $('r-title').textContent = PRE && P4P ? `${S.g==='M'?'Boys':'Girls'} pound-for-pound · ${META.pre_season} preseason projection` : PRE ? `${S.wt ?? ''} ${S.g==='M'?'boys':'girls'} · ${META.pre_season} preseason projection` : P4P ? `${S.g==='M'?'Boys':'Girls'} pound-for-pound · ${S.season}` : `${S.wt ?? ''} ${MS?'middle school ':''}${S.g==='M'?'boys':'girls'} · ${S.asof==='final' ? S.season+' final' : 'week of '+fmtShort(S.asof)}`;
    $('r-count').textContent = PRE ? `${list.length} projected` : P4P ? `${list.length} ranked wrestlers, all weights` : S.asof==='final' ? `${list.length} ranked` : `top ${list.length} shown`;
    $('r-provnote').hidden = P4P || !(S.asof!=='final' && list.some(r=>r.pv));
    const final = (S.asof==='final' && !PRE) || MS || P4P;
    $('r-prenote').hidden = !PRE;
    if (PRE) $('r-prenote').innerHTML = `<strong>A projection, not results.</strong> Built from ${esc(META.sim_next_from)}: seniors are removed, everyone else gets the typical rating gain for their grade, and incoming freshmen start from their 8th-grade season at the high school their middle school feeds. Weights are a guess: at each weight, wrestlers are spread over next season's weights the way that weight usually spreads (most boys through 165 move up a class, most bigger boys and most girls stay), with the youngest moving up first. Weights, transfers and new wrestlers will change once results come in, and the weekly rankings take over from the first weekend.${P4P ? ' The projected P4P Score puts each projected rating on last season\'s scale at the projected weight (500 a typical state qualifier, 1,000 a typical state champion).' : ''}`;
    const top = final ? list.slice(0,3) : [];
    $('r-podium').hidden = !top.length;
    $('r-podium').innerHTML = top.map((r,i)=>`<article${r.id===S.hl?' class="pin"':''}>
        <span class="pr ${i===0?'g':''}" aria-label="Rank ${i+1}">${P4P||S.div!=='all'||S.grade!=='all'?i+1:r.rank}</span>
        <div class="nm" style="min-width:0">${wlink(r.id,r.name)}<div class="sub" style="font-size:14px">${badge(r.tid, r.team, 's')} ${(MS ? mtlink : tlink)(r.tid,r.team)}${PRE && r.from ? ` <span class="chip">Transfer from ${esc(r.from)}</span>` : ''}${P4P?' · '+r.wt+' lbs':r.div?' · Division '+esc(r.div):''}${PRE ? '' : ` · ${r.w}-${r.l}`}</div></div>
        <div>${MS ? '<span class="chip">Middle school</span>' : PRE ? (r.proj==='F' ? '<span class="chip">Incoming freshman</span>' : r.lastPlace ? placeChip(r.lastPlace).replace(/>(\d+\w\w)</, (m,x)=>'>'+esc(META.sim_next_from)+' '+(r.lastPlace===1?'state champion':'state '+x)+'<') : `<span class="chip">No state place in ${esc(META.sim_next_from)}</span>`) : r.place?placeChip(r.place).replace(/>(\d+\w\w)</, (m,x)=>'>'+(r.place===1?'State champion':'State '+x)+'<'):'<span class="chip">No state place</span>'}</div>
        <dl><div><dt>${PRE?'Projected rating':'Rating'}</dt><dd>${r.r}</dd></div><div><dt>Likely range</dt><dd class="sub">±${r.rd}</dd></div><div>${MS?`<dt>Peak</dt><dd>${r.peak}</dd>`:`<dt>${PRE?'Projected P4P':'P4P Score'}</dt><dd>${r.pp ?? '–'}</dd>`}</div></dl>${P4P && !PRE?`<a class="pod-at" href="#rankings/HS/${r.season}/${r.g}/${r.wt}/${r.id}">#${r.wrank} at ${r.wt} lbs →</a>`:''}
      </article>`).join('');
    const rest = final ? list.slice(3) : list;
    // a linked wrestler further down the list is shown too (the list stretches to just past them)
    const hlAt = S.hl ? rest.findIndex(r=>r.id===S.hl) : -1;
    const shown = S.showAll ? rest : rest.slice(0, Math.max(final ? 22 : 25, hlAt + 4));
    $('r-body').innerHTML = shown.map((r,i)=>`<tr${r.id===S.hl?' class="pin"':''}><td class="rk">${!P4P&&S.div==='all'&&S.grade==='all'?r.rank:i+(final?4:1)}</td>${rowsHtml(r)}</tr>`).join('') || empty(cols, final && list.length ? 'Only three ranked wrestlers match these filters.' : 'No ranked wrestlers match these filters.');
    $('r-more').parentElement.hidden = list.length <= 25 || S.showAll; $('r-more').textContent = `Show all ${list.length}`;
    if (final && list.length > 3) $('r-count').textContent = `${list.length} ranked · ranks 4 and below`;
    if (S.grade !== 'all') $('r-count').textContent = `${list.length} ${ord(+S.grade)} graders · grade known for ${known} of ${before}`;
  }

  /* ---------- state odds ---------- */
  async function renderOdds(){
    const O = await loadOdds();
    { const ob = (META.odds_backtest||{}).by_season||{}, ks = Object.keys(ob).filter(s=>s>='2021-22');
      if (ks.length){ const f = ks.map(s=>ob[s].favourite_won/ob[s].brackets), c = ks.map(s=>ob[s].avg_p_given_to_champion);
        $('o-about').textContent = `Since 2021-22 the favorite won ${Math.round(100*Math.min(...f))}% to ${Math.round(100*Math.max(...f))}% of titles, and the eventual champion was given ${Math.round(100*Math.min(...c))}% to ${Math.round(100*Math.max(...c))}% on average; a blind pick would give 6%.`; } }
    const seasons = Object.keys(O).sort().reverse();
    if (!seasons.includes(S.oSeason)) S.oSeason = seasons[0];
    seasonOpts($('o-season'), seasons, S.oSeason);
    const divs = Object.keys(O[S.oSeason]);
    if (!divs.includes(S.oDiv)) S.oDiv = divs[0];
    seg($('o-div'), [['I','D-I'],['II','D-II'],['III','D-III'],['F','Girls']].filter(([v])=>divs.includes(v)), S.oDiv, v=>{S.oDiv=v; renderOdds();});
    const wts = Object.keys(O[S.oSeason][S.oDiv]).map(Number).sort((a,b)=>a-b);
    if (!wts.includes(S.oWt)) S.oWt = wts[0];
    pills($('o-weights'), wts, S.oWt, 'ow', w=>{ S.oWt=w; renderOdds(); });
    const rows = O[S.oSeason][S.oDiv][String(S.oWt)];
    seg($('o-view'), [['bracket','Bracket'],['table','Table']], S.oView||'bracket', v=>{S.oView=v; renderOdds();});
    const bracket = (S.oView||'bracket')==='bracket';
    $('o-quarters').hidden = $('o-bnote').hidden = !bracket; $('o-tablecard').hidden = bracket;
    const fav = rows.reduce((a,b)=>b[6]>a[6]?b:a); const champ = rows.find(r=>r[10]===1);
    $('o-title').textContent = `${S.oWt} · ${S.oDiv==='F'?'Girls':'D-'+S.oDiv} · ${S.oSeason}`;
    $('o-sum').textContent = champ ? `Favorite ${fav[2]} ${Math.round(100*fav[6])}% · Champion ${champ[2]} ${Math.round(100*champ[6])}%` : '';
    const p = x => x>=0.995 ? '>99%' : x<0.005 ? '<1%' : Math.round(100*x)+'%';
    { const ob = ((META.odds_backtest||{}).by_season||{})[S.oSeason];
      $('o-cards').innerHTML = `<div><div class="k">Favorite</div><div class="v">${esc(fav[2])} · ${p(fav[6])} to win</div><div class="s">${esc(fav[3]||'')} · bracket spot ${fav[0]}${fav[10]?' · finished '+(fav[10]===1?'as champion':ord(fav[10])):' · did not place'}</div></div>`
        + (champ ? `<div><div class="k">Champion</div><div class="v">${esc(champ[2])} · given ${p(champ[6])}</div><div class="s">${esc(champ[3]||'')} · bracket spot ${champ[0]}${champ===fav?' · the favorite won':''}</div></div>` : '')
        + (ob ? `<div><div class="k">Across ${S.oSeason}</div><div class="v">Favorites won ${ob.favourite_won} of ${ob.brackets} titles</div><div class="s">Champions were given ${Math.round(100*ob.avg_p_given_to_champion)}% on average</div></div>` : ''); }
    const maxQ = Math.max(...rows.map(r=>r[6]), 0.01);
    const byLine = new Map(rows.map(r=>[r[0], r]));
    const qrow = r => !r ? '' : `<div class="qrow${r[10]===1?' won':''}"><span class="ln">${r[0]}</span>
        <span class="whoflex">${badge(r[4], r[3]||'', 's')}<span>${r[1]?wlink(r[1],r[2]):esc(r[2])}<span class="sub" style="display:block;font-size:13px">${esc(r[3]||'')}${r[5]?' · '+r[5]:''}</span></span></span>
        <span class="tb"><span class="bar lgq" aria-hidden="true"><span style="width:${Math.max(2,Math.round(100*r[6]/maxQ))}%"></span></span><strong>${p(r[6])}</strong><span class="sr"> chance to win state</span></span>
        <span class="pl lgq">${p(r[8])}<span class="sr"> chance to medal</span></span>
        <span>${r[10]?placeChip(r[10]).replace(/>1st</,'>Champion<'):'<span class="sub" style="font-size:13px">No medal</span>'}</span></div>`;
    const group = q => { const ls = [1,2,3,4].map(i=>byLine.get(q*4+i)); const best = ls.filter(Boolean).reduce((a,b)=>b[6]>a[6]?b:a, ls.find(Boolean));
      return `<article class="card"><div class="card-head"><h3>Semifinal spot ${q+1}</h3><span class="sub">Bracket spots ${q*4+1}–${q*4+4}${best?' · most likely: '+esc(best[2].split(' ').slice(-1)[0]):''}</span></div>
        <div class="qhead" aria-hidden="true"><span>Spot</span><span>Wrestler</span><span>Win state</span><span class="lgq" style="text-align:right">Medal</span><span>Actual finish</span></div>
        <div class="qpair" role="group" aria-label="First-round bout: spots ${q*4+1} and ${q*4+2}">${qrow(ls[0])}${qrow(ls[1])}</div>
        <div class="qpair" role="group" aria-label="First-round bout: spots ${q*4+3} and ${q*4+4}">${qrow(ls[2])}${qrow(ls[3])}</div></article>`; };
    $('o-quarters').innerHTML = [['Top half', 0], ['Bottom half', 2]].map(([name, q0])=>`<section class="bhalf" aria-labelledby="bh-${q0}">
      <div class="bhalf-h"><h2 id="bh-${q0}">${name}</h2><span class="sub">Bracket spots ${q0*4+1}–${q0*4+8} · sends one wrestler to the final</span></div>
      <div class="quarters">${group(q0)}${group(q0+1)}</div></section>`).join('');
    const maxT = Math.max(...rows.map(r=>r[6]), 0.01);
    const sorted = rows.slice().sort((a,b)=> innerWidth<=700 ? b[6]-a[6] || a[0]-b[0] : a[0]-b[0]);
    $('o-body').innerHTML = sorted.map(r=>`<tr${r[10]===1?' style="background:color-mix(in srgb, var(--gold) 14%, transparent)"':''}>
      <td class="num sub lg">${r[0]}</td>
      <td class="who">${r[1]?wlink(r[1],r[2]):esc(r[2])}${sl(['spot '+r[0], esc(r[3]||''), r[5]?String(r[5]):''])}</td>
      <td class="lg">${tlink(r[4],r[3]||'')}</td><td class="num lg">${r[5]??'–'}</td>
      <td class="num"><span class="bar lg" aria-hidden="true"><span style="width:${Math.round(100*r[6]/maxT)}%"></span></span><strong>${p(r[6])}</strong></td>
      <td class="num lg">${p(r[7])}</td><td class="num">${p(r[8])}</td><td class="num lg">${r[9].toFixed(1)}</td>
      <td>${r[10]?placeChip(r[10]):'<span class="sub">–</span>'}</td></tr>`).join('');
  }

  /* ---------- pound for pound ---------- */
  /* ---------- teams ---------- */
  let T_HEAD = null;
  async function renderTeams(){
    const PRE_T = S.tSeason==='pre' && !!META.pre_season;
    if (!PRE_T && !rankSeasons().includes(S.tSeason)) S.tSeason = rankSeasons().at(-1);
    seasonOpts($('t-season'), rankSeasons().slice().reverse(), S.tSeason);
    if (META.pre_season) $('t-season').insertAdjacentHTML('afterbegin', `<option value="pre" ${PRE_T?'selected':''}>${META.pre_season} preseason</option>`);
    const thead = $('t-body').closest('table').tHead; T_HEAD = T_HEAD || thead.innerHTML;
    $('t-prenote')?.remove();
    if (PRE_T){ renderTeamsPre(thead); return; }
    thead.innerHTML = T_HEAD;
    seg($('t-gender'), [['M','Boys'],['F','Girls']], S.tg, v=>{S.tg=v; S.tAll=false; renderTeams();});
    seg($('t-div'), [['all','All'],['I','D-I'],['II','D-II'],['III','D-III']], S.tdiv, v=>{S.tdiv=v; S.tAll=false; renderTeams();});
    let list = TEAMS.filter(t=>t.season===S.tSeason&&t.g===S.tg&&t.rank).sort((a,b)=>a.rank-b.rank);
    if (S.tdiv!=='all') list = list.filter(t=>t.div===S.tdiv);
    $('t-title').textContent = `${S.tg==='M'?'Boys':'Girls'} · ${S.tSeason}`;
    $('t-count').textContent = `${list.length} teams`;
    const shown = S.tAll ? list : list.slice(0,25);
    if (!SCHOOLS_READY) loadSchools().then(d=>{ SCHOOLS_READY = d; if (!$('v-teams').hidden) renderTeams(); });
    const dot = tid => { if (LOGOS[tid]) return logoImg(tid,'sm'); const si = SCHOOLS_READY && SCHOOLS_READY[tid]; return si && si[3].length ? `<span class="cdot" aria-hidden="true" style="background:${si[3][0]}"></span>` : '<span class="cdot" aria-hidden="true" style="background:var(--chip)"></span>'; };
    const maxS = list.length ? list[0].lineup_pp : 1;
    $('t-body').innerHTML = shown.map((t,i)=>`<tr${t.tid===S.hl?' class="pin"':''}><td class="rk">${S.tdiv==='all'?t.rank:i+1}</td>
      <td class="who"><div class="whoflex">${badge(t.tid, t.name)}<div><a class="lnk" href="${hT(t.tid, t.season, t.g)}">${esc(t.name)}</a>${sl([t.div?'D-'+t.div:'', t.sq+' state qualifiers', t.champs?t.champs+' champions':''])}</div></div></td>
      <td class="lg">${t.div?esc(t.div):dash}</td><td class="num" style="white-space:nowrap"><span class="bar lg" aria-hidden="true" style="width:90px"><span style="width:${Math.round(100*t.lineup_pp/maxS)}%"></span></span><strong>${t.lineup_pp.toLocaleString()}</strong></td><td class="num lg">${t.weights}</td>
      <td class="num lg">${t.ranked}</td><td class="num lg">${t.sq}</td><td class="num lg">${t.placers}</td><td class="num lg">${t.champs}</td></tr>`).join('') || empty(9, 'No teams match.');
    $('t-more').parentElement.hidden = list.length<=25 || S.tAll; $('t-more').textContent = `Show all ${list.length}`;
  }
  // projected team rankings for the coming season: each team's projected P4P Score at every weight, added up
  async function renderTeamsPre(thead){
    seg($('t-gender'), [['M','Boys'],['F','Girls']], S.tg, v=>{S.tg=v; S.tAll=false; renderTeams();});
    seg($('t-div'), [['all','All'],['I','D-I'],['II','D-II'],['III','D-III']], S.tdiv, v=>{S.tdiv=v; S.tAll=false; renderTeams();});
    const P = await loadPre(); if (S.tSeason !== 'pre') return;
    const ci = Object.fromEntries((P.teamcols||[]).map((c,i)=>[c,i]));
    let list = (P.teamrank||[]).map(r=>({tid:r[ci.tid], g:r[ci.g], name:(TBY.get(r[ci.tid])||[]).at(-1)?.name || r[ci.name] || '', lineup_pp:r[ci.lineup_pp],
      weights:r[ci.weights], projected:r[ci.projected], placers:r[ci.placers], rank:r[ci.rank], div:divOf(r[ci.tid])})).filter(t=>t.g===S.tg);
    if (S.tdiv!=='all') list = list.filter(t=>t.div===S.tdiv);
    thead.innerHTML = `<tr><th>Rank</th><th>Team</th><th class="lg">Div</th><th class="num">Projected strength</th><th class="num lg">Weights filled</th><th class="num lg">Projected wrestlers</th><th class="num lg">Returning state placers</th></tr>`;
    $('t-title').textContent = `${S.tg==='M'?'Boys':'Girls'} · ${META.pre_season} preseason projection`;
    $('t-count').textContent = `${list.length} teams`;
    $('t-prenote')?.remove();
    $('t-body').closest('.card').insertAdjacentHTML('beforebegin', `<p class="note" id="t-prenote"><strong>A projection, not results.</strong> Built from the ${esc(P.from)} results behind the preseason rankings: each team's returning wrestlers and incoming freshmen at their projected weights (a wrestler may fill the class on either side, as a coach would), and the team's projected P4P Score at every weight added up. Transfers, new wrestlers and lineup choices will change it once the season starts.</p>`);
    const shown = S.tAll ? list : list.slice(0,25), maxS = list.length ? list[0].lineup_pp : 1;
    $('t-body').innerHTML = shown.map((t,i)=>`<tr><td class="rk">${S.tdiv==='all'?t.rank:i+1}</td>
      <td class="who"><div class="whoflex">${badge(t.tid, t.name)}<div><a class="lnk" href="${hT(t.tid)}">${esc(t.name)}</a>${sl([t.div?'D-'+t.div:'', t.projected+' projected wrestlers'])}</div></div></td>
      <td class="lg">${t.div?esc(t.div):dash}</td><td class="num" style="white-space:nowrap"><span class="bar lg" aria-hidden="true" style="width:90px"><span style="width:${Math.round(100*t.lineup_pp/maxS)}%"></span></span><strong>${t.lineup_pp.toLocaleString()}</strong></td>
      <td class="num lg">${t.weights}</td><td class="num lg">${t.projected}</td><td class="num lg">${t.placers}</td></tr>`).join('') || empty(7, 'No teams match.');
    $('t-more').parentElement.hidden = list.length<=25 || S.tAll; $('t-more').textContent = `Show all ${list.length}`;
  }
  async function renderTeam(){
    const recs = TBY.get(S.team) || [];
    // high school / middle school switch where the school has both
    { const both = recs.length && MST.has(S.team);
      $('tm-level').hidden = !both;
      if (both) seg($('tm-level'), [['HS','High school'],['MS','Middle school']], S.tmLv==='MS' ? 'MS' : 'HS', v=>{ S.tmLv = v; S.tmSeason = null; history.replaceState(null,'', v==='MS' ? hMT(S.team) : hT(S.team)); renderTeam(); }); }
    folButton($('tm-follow'), S.tmLv==='MS' && MST.has(S.team) ? 'm' : 't', S.team);
    if (S.tmLv==='MS' && MST.has(S.team)) return renderTeamMS();
    if (!recs.length){ $('tm-name').textContent='Team not found'; return; }
    $('tm-views').hidden = false; $('tm-lineup').closest('.card').hidden = false; $('tm-lineup').closest('.grid2').style.gridTemplateColumns = '';
    if ((S.tmView==='history' && !FULL) || oldSeason(S.tmSeason)){ fullReady.then(()=>{ if (!$('v-team').hidden) renderTeam(); });
      $('tm-name').textContent = (recs.at(-1)||{}).name || ''; $('tm-hist').hidden = true; $('tm-seasonview').hidden = false;
      $('tm-tiles').innerHTML = '<p class="loading">Loading earlier seasons…</p>'; $('tm-lineup').innerHTML = ''; $('tm-events').innerHTML = ''; $('tm-roster').innerHTML = ''; return; }
    const seasons = [...new Set(recs.filter(r=>r.g===S.tmG).map(r=>r.season))].sort().reverse();
    if (!seasons.length){ S.tmG = recs[0].g; return renderTeam(); }
    if (!seasons.includes(S.tmSeason)) S.tmSeason = seasons[0];
    const t = recs.find(r=>r.season===S.tmSeason && r.g===S.tmG);
    $('tm-name').textContent = t.name;
    // events on wrestle.live the team is entered in, or that are held at its school
    { const me = S.team; sReady().then(()=>{ const full = S_SCH && S_SCH[me] && S_SCH[me][6] ? sNorm(S_SCH[me][6]) : null;
        wlNext('tm-wl', $('tm-views'), u=>u.teams.some(x=>x.tid===me && !x.ms) || (full && sNorm(u.where) === full), ()=>S.team===me && S.tmLv!=='MS' && !$('v-team').hidden ? 'Coming up' : ''); }); }
    const nd = S.tmG==='M' && S.tmSeason===seasons[0] ? divOf(S.team) : null;   // moved in OHSAA's next alignment?
    const away = t.st && t.st!=='OH';     // out-of-state team: a page and Matchups, never a rank
    $('tm-eyebrow').textContent = away ? `Team · ${STATES[t.st]||t.st} · ${S.tmG==='M'?'Boys':'Girls'} · not ranked (out of state)`
      : `Team · ${t.div ? 'Division '+t.div+' · ' : ''}${S.tmG==='M'?'Boys':'Girls'}${nd && t.div && nd!==t.div ? ` · Division ${nd} in ${META.pre_season}` : ''}`;
    { const si = (await loadSchools())[S.team];
      $('tm-bar').hidden = $('tm-school').hidden = !si;
      const mono = $('tm-mono'); mono.textContent = t.name.split(/[\s-]+/).filter(x=>/^[A-Za-z]/.test(x)).slice(0,2).map(x=>x[0]).join('').toUpperCase();
      const c0 = si && si[3][0]; mono.classList.toggle('haslogo', !!LOGOS[S.team]); if (LOGOS[S.team]) mono.innerHTML = `<img src="logos/${LOGOS[S.team]}" alt="">`;
      mono.style.background = c0 || '#1A3686'; mono.style.color = c0 ? inkOn(c0) : '#fff'; mono.style.boxShadow = '0 0 0 3px ' + ((si && si[3][1]) || '#8FB0FF');
      if (si){ const [nick, mascot, colors, hex, city, conf] = si;
        $('tm-bar').innerHTML = (hex.length ? hex : []).map(c=>`<span style="background:${c}"></span>`).join('');
        $('tm-bar').hidden = !hex.length;
        $('tm-school').innerHTML = [nick ? `<strong>${esc((si[6]||t.name).replace(/\s*\(.*?\)/,'').replace(/\s+(High|Senior High)?\s*School$/,''))} ${esc(nick)}</strong>` : '',
          city ? `<span>${esc(city.replace(/, Ohio$/,''))}</span>` : '', conf ? `<span>${esc(conf)}</span>` : '',
          colors ? `<span class="swatches">${hex.map(c=>`<span class="swatch" style="background:${c}" aria-hidden="true"></span>`).join('')}<span>${esc(colors)}</span></span>` : '',
          mascot && mascot!==nick ? `<span>Mascot: ${esc(mascot)}</span>` : ''].filter(Boolean).join(''); } }
    seasonOpts($('tm-season'), seasons, S.tmSeason);
    const H = S.tmView==='history';
    seg($('tm-views'), [['season', S.tmSeason], ['history','School history']], H ? 'history' : 'season', v=>{ S.tmView=v; history.replaceState(null,'', v==='history' ? `#team/${S.team}/history` : hT(S.team,S.tmSeason,S.tmG)); renderTeam(); });
    $('tm-hist').hidden = !H; $('tm-seasonview').hidden = H; $('tm-season-f').hidden = H; $('tm-sim').hidden = H;
    // Boys/Girls only when the school has both programs (this season, or ever in history view)
    const gs = H ? [...new Set(ROWS.filter(r=>r.tid===S.team).map(r=>r.g))] : [...new Set(recs.map(r=>r.g))];
    if (H && gs.length && !gs.includes(S.tmG)) S.tmG = gs[0];
    seg($('tm-gender'), gs.length > 1 ? [['M','Boys'],['F','Girls']].filter(([v])=>gs.includes(v)) : [], S.tmG, v=>{S.tmG=v; history.replaceState(null,'', H ? `#team/${S.team}/history` : hT(S.team,S.tmSeason,S.tmG)); renderTeam();});
    $('tm-gender').hidden = gs.length < 2;
    $('tm-gender').parentElement.hidden = H && gs.length < 2;
    if (H){ renderTeamHistory(); return; }
    const RK = rankSeasons().includes(S.tmSeason) && !away;   // state-only seasons (before 2011-12) have no team ranking
    const here = ROWS.filter(r=>r.tid===S.team&&r.season===S.tmSeason&&r.g===S.tmG);
    $('tm-tiles').innerHTML = (away ? [
      ['Home state', STATES[t.st]||t.st, 'out-of-state teams are rated, not ranked'],
      ['Wrestlers', here.length, `${t.weights} weights filled`],
      ['Record', `${here.reduce((n,r)=>n+(r.w||0),0)}-${here.reduce((n,r)=>n+(r.l||0),0)}`, 'bouts in our results'],
      ['Top rating', here.length ? Math.max(...here.map(r=>r.r||0)).toLocaleString() : '–', S.tmSeason]
    ] : [
      RK ? ['Team rank', '#'+t.rank, `strength ${t.lineup_pp.toLocaleString()}`] : ['Results', 'State only', 'only the state tournament is in our results'],
      RK ? ['Ranked wrestlers', t.ranked, `${t.weights} weights filled`] : ['State bouts', ROWS.filter(r=>r.tid===S.team&&r.season===S.tmSeason&&r.g===S.tmG).reduce((n,r)=>n+(r.w||0)+(r.l||0),0), 'wins and losses at state'],
      ['State qualifiers', t.sq, `${t.placers} placers`],
      ['State champions', t.champs, S.tmSeason]
    ]).map(([k,v,s],i)=>i===0 && RK
      ? `<a class="card tile tilelink" href="#teams/${t.season}/${t.g}/${t.tid}" title="See the full ${t.season} team rankings"><div class="k">${k} <span class="go" aria-hidden="true">→</span></div><div class="v">${esc(v)}</div><div class="s">${esc(s)}</div></a>`
      : `<div class="card tile"><div class="k">${k}</div><div class="v">${esc(v)}</div><div class="s">${esc(s)}</div></div>`).join('');
    $('tm-lu-sub').textContent = away ? 'Top-rated wrestler at each weight' : 'Best ranked wrestler at each weight';
    const roster = ROWS.filter(r=>r.tid===S.team && r.season===S.tmSeason && r.g===S.tmG);
    const best = new Map(); for (const r of roster.filter(r=>r.wt)) { const c=best.get(r.wt); if (!c || (r.pp??-9e9) > (c.pp??-9e9) || (r.pp==null && c.pp==null && (r.r||0) > (c.r||0))) best.set(r.wt, r); }
    $('tm-lineup').innerHTML = [...best.values()].sort((a,b)=>a.wt-b.wt).map(r=>`<tr><td class="num"><strong>${r.wt}</strong></td>
      <td class="who">${wlink(r.id,r.name)}${sl([`${r.w}-${r.l}`, placeText(r.place)])}</td><td class="num lg">${r.w}-${r.l}</td><td class="num lg">${r.r}</td>
      <td class="num">${r.ranked?`<a class="lnk plain" href="#rankings/HS/${r.season}/${r.g}/${r.wt}/${r.id}" title="See the ${r.wt} rankings">#${r.rank}</a>`:'–'}</td><td class="num">${r.pp!=null&&r.ranked?`<a class="lnk plain" href="#p4p/${r.season}/${r.g}/${r.id}" title="See the pound-for-pound rankings">${r.pp}</a>`:(r.pp??'–')}</td><td class="lg">${placeChip(r.place)}</td></tr>`).join('') || empty(7, away ? 'No wrestlers with a weight this season.' : 'No ranked wrestlers this season.');
    $('tm-events').innerHTML = '<p class="loading">Loading events…</p>';
    const want = S.tmSeason, tid = S.team, g = S.tmG;
    loadMoves().then(()=>{ if (want !== S.tmSeason || tid !== S.team || g !== S.tmG) return;
      const moved = [];
      for (const [wid, m] of Object.entries(MV)){ const gs = m.s[want]; if (!gs) continue;
        const i = gs.findIndex(x=>x[0]===tid); if (i<0) continue;
        const row = (BYID.get(+wid)||[]).find(r=>r.season===want); if (!row || row.g!==g) continue;
        moved.push({wid:+wid, name:row.name, gs, i, here:gs[i]}); }
      moved.sort((a,b)=>a.name.localeCompare(b.name));
      $('tm-moved').hidden = !moved.length;
      $('tm-moved-h').textContent = `Changed schools during ${want}`;
      $('tm-moved-body').innerHTML = moved.map(x=>{ const other = x.gs.filter((_,j)=>j!==x.i);
        const mv = x.i===0 ? `Left for ${other.map(o=>tlink(o[0],o[1])).join(', ')}` : `Came from ${other.map(o=>tlink(o[0],o[1])).join(', ')}`;
        const span = x.here[3]===x.here[4] ? fmtMD(x.here[3]) : `${fmtMD(x.here[3])} to ${fmtMD(x.here[4])}`;
        return `<tr><td class="who">${wlink(x.wid,x.name)}${sl([span])}</td><td>${mv}</td><td class="num">${x.here[2]}</td><td class="lg sub">${span}</td></tr>`; }).join(''); });
    $('tm-sim').href = `#matchups/d/${want}/${g}/${tid}`;
    $('tm-roster').innerHTML = '<tr><td colspan="7" class="loading">Loading roster…</td></tr>';
    const d = await loadSeason(want);
    if (want !== S.tmSeason || tid !== S.team || g !== S.tmG) return;
    { // every wrestler with a bout for this team this season, ranked or not
      const rs = new Map();
      for (const b of (d.byTeam.get(tid) || [])){ const ev = EVBY.get(b[0]); if (!ev || (ev.g && ev.g!==g)) continue;
        const rt = d.rt[b[7]]; if (rt==='ff' || rt==='mff' || rt==='bye') continue;
        for (const [id, me, won] of [[b[3], b[5], true], [b[4], b[6], false]]){ if (me!==tid) continue;
          const x = rs.get(id) || {id, w:0, l:0, f:0, wts:new Map()}; won ? x.w++ : x.l++; if (won && rt==='fall') x.f++;
          x.wts.set(b[1], (x.wts.get(b[1])||0)+1); rs.set(id, x); } }
      const YRS = {9:'9th',10:'10th',11:'11th',12:'12th'};
      const list = [...rs.values()].map(x=>{ const row = (BYID.get(x.id)||[]).find(r=>r.season===want);
        const wt = [...x.wts.entries()].sort((a,b)=>b[1]-a[1])[0]?.[0] ?? null; return {...x, wt, row}; })
        .sort((a,b)=>(a.wt??999)-(b.wt??999) || (b.w-b.l)-(a.w-a.l));
      $('tm-roster-h').textContent = `Full roster · ${want}`;
      $('tm-roster-sub').textContent = `${list.length} wrestlers with a bout in our results · forfeits not counted`;
      $('tm-roster').innerHTML = list.map(x=>`<tr><td class="num"><strong>${x.wt??'–'}</strong></td>
        <td class="who">${hasProfile(x.id) ? wlink(x.id, d.names[x.id]||'?') : esc(d.names[x.id]||'?')}${sl([x.row&&x.row.gr?YRS[x.row.gr]:'', x.f?`${x.f} pin${x.f>1?'s':''}`:''])}</td>
        <td class="num lg">${x.row&&x.row.gr?YRS[x.row.gr]:dash}</td><td class="num">${x.w}-${x.l}</td><td class="num lg">${x.f}</td>
        <td class="num lg">${x.row?x.row.r:dash}</td><td class="num">${x.row&&x.row.ranked?`<a class="lnk plain" href="#rankings/HS/${x.row.season}/${x.row.g}/${x.row.wt}/${x.row.id}" title="See the ${x.row.wt} rankings">#${x.row.rank}</a>`:dash}</td></tr>`).join('') || empty(7, 'No bouts for this team in our results this season.');
    }
    const per = new Map();
    for (const b of (d.byTeam.get(tid) || [])){ const x = per.get(b[0]) || {w:0,l:0}; if (b[5]===tid) x.w++; if (b[6]===tid) x.l++; per.set(b[0],x); }
    const evs = [...per.entries()].map(([e,x])=>({e:EVBY.get(e), ...x})).filter(x=>x.e && (x.e.g===g || x.e.g==null)).sort((a,b)=>a.e.date.localeCompare(b.e.date));
    $('tm-events').innerHTML = evs.length ? `<table><thead><tr><th class="lg">Date</th><th>Event</th><th class="lg">Type</th><th class="num">W-L</th></tr></thead><tbody>${
      evs.map(x=>`<tr><td class="sub lg" style="white-space:nowrap">${fmtShort(x.e.date)}</td><td class="who">${elink(x.e.eid,x.e.name)}${sl([fmtShort(x.e.date), evTag(x.e)])}</td><td class="lg">${evTag(x.e)}</td><td class="num">${x.w}-${x.l}</td></tr>`).join('')}</tbody></table>`
      : '<p class="loading">No events for this team in the database this season.</p>';
  }

  /* ---------- places (towns, ZIP codes) ---------- */
  let PLACES = null, PLACES_P = null, TOWNPT = null;
  function loadPlaces(){
    return PLACES_P || (PLACES_P = fetch('places.json').then(r=>r.json()).then(d=>{
      PLACES = d; TOWNPT = new Map();
      const acc = new Map();   // every Ohio town in the ZIP list, averaged over its ZIP codes
      for (const [lat, lon, town] of Object.values(d.zips)){ const k = town.toLowerCase(); const a = acc.get(k) || [0,0,0,town]; a[0]+=lat; a[1]+=lon; a[2]++; acc.set(k, a); }
      for (const [k,a] of acc) TOWNPT.set(k, {lat:a[0]/a[2], lon:a[1]/a[2], name:a[3]});
      for (const [name, county, lat, lon] of d.towns) TOWNPT.set(name.toLowerCase(), {lat, lon, name});
      $('e-towns').innerHTML = [...new Set(d.towns.map(t=>t[0]))].sort().map(t=>`<option value="${esc(t)}">`).join('');
      return d; }));
  }
  const townOf = e => PLACES && e.pl!=null ? PLACES.towns[e.pl] : null;
  const miles = (a, b) => { const R = 3958.8, r = Math.PI/180, dLa = (b.lat-a.lat)*r, dLo = (b.lon-a.lon)*r;
    const x = Math.sin(dLa/2)**2 + Math.cos(a.lat*r)*Math.cos(b.lat*r)*Math.sin(dLo/2)**2; return 2*R*Math.asin(Math.sqrt(x)); };
  function nearPoint(q){
    q = q.trim().replace(/,?\s*(oh|ohio)\.?$/i,'').trim(); if (!q || !PLACES) return null;
    if (/^\d{5}$/.test(q)){ const z = PLACES.zips[q]; return z ? {lat:z[0], lon:z[1], name:`${z[2]} (${q})`} : null; }
    const k = q.toLowerCase().replace(/^st\.? /,'saint ').replace(/^mt\.? /,'mount ');
    return TOWNPT.get(k) || TOWNPT.get(q.toLowerCase()) || null;
  }

  // all-time bests: one season per row, older weight classes counted at the nearest current one
  // seasons with a real ranking: 1999-00 to 2010-11 have only the state tournament in our results, where a
  // wrestler counts as ranked only by wrestling 6 state bouts
  function rankSeasons(){ if (META.rank_seasons) return META.rank_seasons;      // from the build; counted here only for an older build
    if (!META._rankSeasons){ const n = new Map(); for (const r of ROWS) if (r.ranked) n.set(r.season, (n.get(r.season)||0)+1);
    META._rankSeasons = META.seasons.filter(x => (n.get(x)||0) >= 300); } return META._rankSeasons; }
  function renderTeamHistory(){
    const NOW = S.tmG==='F' ? [100,105,110,115,120,125,130,135,140,145,155,170,190,235] : [106,113,120,126,132,138,144,150,157,165,175,190,215,285];
    const slot = w => NOW.reduce((a,b)=> Math.abs(b-w) < Math.abs(a-w) ? b : a);
    const rows = ROWS.filter(r=>r.tid===S.team && r.g===S.tmG && r.pp!=null && r.wt);
    const best = new Map(); for (const r of rows){ const s = slot(r.wt), c = best.get(s); if (!c || r.pp > c.pp) best.set(s, r); }
    // state results go back to 1999-00; ratings-based rows (P4P) start in 2011-12
    const all = ROWS.filter(r=>r.tid===S.team && r.g===S.tmG);
    const yrs = [...new Set(all.map(r=>r.season))].sort();
    const st = all.filter(r=>r.sq || r.place), stYrs = [...new Set(st.map(r=>r.season))].sort();
    const champs = st.filter(r=>r.place===1).length, placers = st.filter(r=>r.place && r.place<=8).length;
    const ttop = (TBY.get(S.team)||[]).filter(t=>t.g===S.tmG && t.rank && rankSeasons().includes(t.season)).sort((a,b)=>a.rank-b.rank)[0];
    $('tm-htiles').innerHTML = [
      ['State champions', champs, `since ${stYrs[0]||yrs[0]||'–'}`],
      ['State placers', placers, `${st.filter(r=>r.sq).length} state qualifiers`],
      ['Best team rank', ttop ? '#'+ttop.rank : '–', ttop ? ttop.season : ''],
      ['Seasons in our results', yrs.length, yrs.length ? `${yrs[0]} to ${yrs.at(-1)}` : '']
    ].map(([k,v,s])=>`<div class="card tile"><div class="k">${k}</div><div class="v">${esc(v)}</div><div class="s">${esc(s)}</div></div>`).join('');
    $('tm-hbest').innerHTML = NOW.map(w=>{ const r = best.get(w); if (!r) return `<tr><td class="num"><strong>${w}</strong></td><td class="sub" colspan="4">No ranked season yet</td></tr>`;
      return `<tr><td class="num"><strong>${w}</strong></td><td class="who">${wlink(r.id,r.name)}${sl([r.season + (r.wt!==w ? ` · at ${r.wt}` : ''), placeText(r.place)])}</td>
        <td class="num lg">${r.season}${r.wt!==w ? `<div class="sub" style="font-size:12px">at ${r.wt}</div>` : ''}</td><td class="num"><strong>${fmtS(r.pp)}</strong></td><td class="lg">${placeChip(r.place)}</td></tr>`; }).join('');
    const top = rows.slice().sort((a,b)=>b.pp-a.pp).slice(0,10);
    $('tm-htop').innerHTML = top.map((r,i)=>`<tr><td class="rk">${i+1}</td><td class="who">${wlink(r.id,r.name)}${sl([r.wt+' lbs', r.season, placeText(r.place)])}</td>
      <td class="num">${r.wt}</td><td class="num lg">${r.season}</td><td class="num"><strong>${fmtS(r.pp)}</strong></td><td class="lg">${placeChip(r.place)}</td></tr>`).join('');
  }

  /* ---------- events ---------- */
  function renderEvents(){
    if (!PLACES){ loadPlaces().then(()=>{ if (!$('v-events').hidden) renderEvents(); }); }
    wlUpcoming();
    if (!YNOW) loadY().then(I=>{ if (I.events.length && !$('v-events').hidden) renderEvents(); });
    if (!WLI_NOW) loadWLI().then(I=>{ WLI_NOW = I || {}; if (Object.keys(WLI_NOW).length && !$('v-events').hidden) renderEvents(); });
    const YE = YNOW ? YNOW.events : [];
    seasonOpts($('e-season'), [...new Set([...META.seasons, ...YE.map(y=>y.season)])].sort().reverse(), S.eSeason);
    seg($('e-level'), [['all','All'],['HS','High school'],['MS','Middle school'], ...(YE.length ? [['Y','Youth']] : [])], S.elv||'all', v=>{S.elv=v; renderEvents();});
    $('e-type').hidden = S.elv==='MS' || S.elv==='Y';
    seg($('e-type'), [['all','All'],['tournament','Tournaments'],['dual','Duals'],['sectional','Sectionals'],['district','Districts'],['state','State']], S.etype, v=>{S.etype=v; renderEvents();});
    seg($('e-gender'), [['all','All'],['M','Boys'],['F','Girls']], S.eg, v=>{S.eg=v; renderEvents();});
    let list = EVENTS.filter(e=>e.season===S.eSeason);
    if (S.elv && S.elv!=='all') list = list.filter(e=>(e.lv||'HS')===S.elv);
    if (S.etype!=='all' && S.elv!=='MS') list = list.filter(e=>e.type===S.etype && e.lv!=='MS');
    if (S.eg!=='all') list = list.filter(e=>e.g===S.eg);
    $('e-title').textContent = S.eSeason;
    const fq = $('e-q').value.trim().toLowerCase();
    if (fq.length > 2){ if (!S_SCH) sReady().then(()=>{ if (!$('v-events').hidden) renderEvents(); }); const hit = new Set(findE(fq, list, true)); list = list.filter(e=>hit.has(e)); }
    else if (fq) list = list.filter(e=>sEvKey(e).includes(sNorm(fq)));
    // near a town or ZIP code
    const nq = $('e-near').value.trim(), R = +$('e-radius').value; let pt = null;
    $('e-nearmsg').textContent = '';
    if (nq){
      if (!PLACES) $('e-nearmsg').textContent = 'Loading towns…';
      else if (!(pt = nearPoint(nq))) $('e-nearmsg').textContent = `We don't know an Ohio town or ZIP code "${nq}". Try a nearby town.`;
      else { list = list.filter(e=>{ const t = townOf(e); return t && (e.dist = miles(pt, {lat:t[2], lon:t[3]})) <= R; });
        const noTown = EVENTS.filter(e=>e.season===S.eSeason && e.pl==null).length;
        if (noTown) $('e-nearmsg').textContent = `${noTown} event${noTown>1?'s':''} this season ${noTown>1?'have':'has'} no known location and can't be matched by distance.`; }
    }
    // youth events (run on wrestle.live): listed by day with the rest; they have no gender, type or distance
    const ylist = (S.elv==='all' || !S.elv || S.elv==='Y') && S.etype==='all' && S.eg==='all' && !nq
      ? YE.filter(y=>y.season===S.eSeason && (!fq || sNorm([y.name, y.where, y.host].join(' ')).includes(sNorm(fq)))) : [];
    if (S.elv==='Y') list = [];
    $('e-count').textContent = `${list.length + ylist.length} event${list.length + ylist.length===1?'':'s'}${pt ? ` within ${R} miles of ${pt.name}` : ''} · ${(list.reduce((s,e)=>s+e.bouts,0) + ylist.reduce((s,y)=>s+y.bouts,0)).toLocaleString()} bouts`;
    let lastD = null;
    const dayName = d => new Date(d+'T12:00:00').toLocaleDateString('en-US',{weekday:'long', month:'long', day:'numeric', year:'numeric'});
    const TR = {state:0, district:1, sectional:2, dual:3, tournament:4}, DR = d => ({I:1, II:2, III:3})[d] || 9;
    list = list.slice().sort((a,b)=> b.date.localeCompare(a.date) || (TR[a.type]??5)-(TR[b.type]??5) || (a.g==='F')-(b.g==='F') || DR(a.div)-DR(b.div)
      || evName(a.name).localeCompare(evName(b.name)));
    const where = e => { const t = townOf(e); return t ? `${esc(t[0])}${pt ? ` <span class="sub">· ${Math.round(e.dist)} mi</span>` : ''}` : ''; };
    const rows = [...ylist.map(y=>({date: y.date, y})), ...list].sort((a,b)=>b.date.localeCompare(a.date));
    $('e-body').innerHTML = rows.map(e=>{ const hd = e.date!==lastD ? `<tr class="dgrp"><th colspan="4" scope="colgroup">${dayName(e.date)}</th></tr>` : ''; lastD = e.date;
      if (e.y){ const y = e.y; return hd + `<tr><td class="who"><a class="lnk" href="${hYE(y.id)}">${esc(y.name)}</a>${WL_MARK}${sl([Y_TAG, esc(y.where)])}</td><td class="lg">${esc(y.where) || dash}</td><td class="lg">${Y_TAG}</td><td class="num">${y.bouts.toLocaleString()}</td></tr>`; }
      const t = townOf(e);
      return hd + `<tr><td class="who">${elink(e.eid,e.name)}${WLI_NOW && WLI_NOW[e.eid] ? WL_MARK : ''}${sl([evTag(e), t ? esc(t[0]) + (pt ? ` · ${Math.round(e.dist)} mi` : '') : ''])}</td><td class="lg">${where(e) || dash}</td><td class="lg">${evTag(e)}</td><td class="num">${e.bouts.toLocaleString()}</td></tr>`; }).join('')
      || empty(4, pt ? `No events within ${R} miles of ${esc(pt.name)} this season. Try a wider distance or another season.` : 'No events match these filters.');
  }
  async function renderEvent(){
    const e = EVBY.get(S.event); if (!e) return;
    $('ev-head').classList.remove('evband'); for (const k of ['ev-mono','ev-chips','ev-acts','ev-stats','ev-built']) $(k).hidden = true;
    $('ev-head').classList.toggle('oh', postS(e));
    if (postS(e)){ $('ev-mono').hidden = false; $('ev-mono').innerHTML = OHSAA_IMG; }
    $('ev-eyebrow').textContent = `${evType(e)}${e.div?' · Division '+e.div:''}${e.g==='F'?' · Girls':''} · ${e.season}`;
    $('ev-name').textContent = evName(e.name);
    $('ev-sub').textContent = `${fmtDate(e.date)} · ${e.bouts.toLocaleString()} bouts`;
    loadPlaces().then(()=>{ if (S.event!==e.eid) return; const t = townOf(e);
      $('ev-where').hidden = !t && !e.venue && e.type!=='dual';
      if (!t && !e.venue){ $('ev-where').textContent = 'Location not recorded'; return; }
      // the host school's street address when we have it ("300 Licking View Drive|43056"), with a map link
      const [street, zip] = (e.addr || '').split('|');
      const town = t ? (t[1] ? `${t[0]}, ${t[1]} County` : t[0]) : '';
      const full = street ? `${street}, ${t ? t[0] + ', ' : ''}OH${zip ? ' ' + zip : ''}` : '';
      const venue = e.venue && !(full && /^\d/.test(e.venue)) ? e.venue : '';   // a venue line that is itself the street address is shown once
      $('ev-where').innerHTML = [venue ? esc(venue) : '', full ? esc(full) : esc(town)].filter(Boolean).join(' · ')
        + (full ? ` · <a href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent((venue ? venue + ', ' : '') + full)}" target="_blank" rel="noopener">Map</a>` : '')
        + (t && t[1] ? ` · <a href="#events/near/${encodeURIComponent(t[0])}/${e.season}">Events near ${esc(t[0])}</a>` : ''); });
    { const all = (e.sid!=null ? SERIES.get(e.sid) : null) || [e];
      const others = all.slice().sort((a,b)=>b.date.localeCompare(a.date));
      const perSeason = new Map(); for (const x of others) perSeason.set(x.season, (perSeason.get(x.season)||0)+1);
      const tag = x => perSeason.get(x.season) > 1 ? ' · ' + ((x.name.match(/\(([^)]*)\)\s*$/)||[])[1] || x.name.split(/ - | · /).at(-1)).replace(/^(Quarterfinals?|Final)\s*[-·]\s*/,'') : '';
      $('ev-years').hidden = others.length < 2;
      $('ev-years').innerHTML = `<span class="k">Other years</span>` + others.map(x=>`<a href="${hE(x.eid)}"${x.eid===e.eid?' aria-current="page"':''}>${x.season}${esc(tag(x))}</a>`).join(''); }
    if (e.sid!=null) wlNext('ev-wlnext', $('ev-years'), u=>u.sid===e.sid && u.d0 > e.date, ()=>S.event===e.eid ? 'Next edition' : '');
    else if ($('ev-wlnext')) $('ev-wlnext').hidden = true;
    $('ev-bouts').innerHTML = '<p class="loading">Loading bouts…</p>'; $('ev-placers').innerHTML = '';
    $('ev-btitle').closest('.card').hidden = false; if ($('ev-duals')) $('ev-duals').hidden = true;
    // dual meets have no placement rounds: the bouts take the full width
    const dual = e.type==='dual';
    document.querySelector('#v-event .ev-col').hidden = dual;
    $('ev-grid').classList.toggle('one', dual);
    const want = S.event; const d = await loadSeason(e.season, e.lv); if (want !== S.event) return;
    const bouts = d.byEvent.get(e.eid) || [];
    $('ev-weights').hidden = dual;
    const over = evOverBox(); over.hidden = true;
    $('ev-grid').hidden = false;
    if (dual){ renderDual(e, d, bouts); wlEvent(e, 'dual'); return; }
    const ws = [...new Set(bouts.map(b=>b[1]).filter(Boolean))].sort((a,b)=>a-b);
    const N = id => d.names[id] || '?', T = id => d.teams[id] || '';
    const [EP, TSALL] = await Promise.all([loadEvPlaces(), loadTeamScores()]); if (want !== S.event) return;
    // places at a weight: from placement bouts, else places sent to us for a round robin. [place, wrestler, team, bout]
    const placesAt = wt => { const out = [];
      for (const b of bouts) if (b[1]===wt){ const pr = placePair(d.rounds[b[2]]); if (pr){ out.push([pr[0], b[3], b[5], b]); out.push([pr[1], b[4], b[6], b]); } }
      if (!out.length && EP[e.eid]?.[wt]) for (const [p, w, t] of EP[e.eid][wt]) out.push([p, w, t, null]);
      return out.sort((a,b)=>a[0]-b[0]); };
    const TS = TSALL[e.eid], anyPlaces = ws.some(w => placesAt(w).length);
    // "All weights" (0) first: team standings and every weight's finals on one screen
    const withAll = (anyPlaces || TS) && ws.length > 1;
    if (S.evWt == null) S.evWt = withAll ? 0 : ws[0];
    if (!(S.evWt === 0 && withAll) && !ws.includes(S.evWt)) S.evWt = ws[0];
    pills($('ev-weights'), withAll ? [0, ...ws] : ws, S.evWt, 'ew', w=>{ S.evWt=w; renderEvent(); });
    { const b0 = $('ev-weights').querySelector('[data-ew="0"]'); if (b0) b0.textContent = 'All weights'; }
    wlEvent(e, S.evWt);
    if (S.evWt === 0){ renderEventOverview(e, d, ws, placesAt, TS, N, T, bouts); return; }
    const wb = bouts.filter(b=>b[1]===S.evWt);
    const places = placesAt(S.evWt);
    { const rec = new Map(), tm = new Map(), bump = (w, t, k) => { const r = rec.get(w) || rec.set(w, [0, 0]).get(w); r[k]++; tm.set(w, t); };
      for (const b of wb){ bump(b[3], b[5], 0); bump(b[4], b[6], 1); }
      const R = w => { const r = rec.get(w); return r ? `${r[0]}-${r[1]}` : ''; };
      const chip = p => `<span class="chip ${p<=3?'p'+p:''}">${ord(p)}</span>`;
      const row = (p, w, t) => `<tr><td class="rk">${p ? chip(p) : dash}</td><td class="who"><div class="whoflex">${badge(t, T(t))}<div>${wlink(w,N(w))}${sl([esc(T(t))])}</div></div></td><td class="sub lg">${esc(T(t))}</td><td class="num">${R(w)}</td></tr>`;
      const placed = new Set(places.map(x=>x[1]));
      const rest = [...rec.keys()].filter(w=>!placed.has(w)).sort((a,b)=>rec.get(b)[0]-rec.get(a)[0] || rec.get(a)[1]-rec.get(b)[1] || N(a).localeCompare(N(b)));
      $('ev-ptitle').textContent = places.length ? `${S.evWt} · Placers` : `${S.evWt} · Wrestlers`;
      $('ev-placers').innerHTML = `<table><thead><tr><th>Place</th><th>Wrestler</th><th class="lg">School</th><th class="num">Record here</th></tr></thead><tbody>${places.map(([p,w,t])=>row(p,w,t)).join('')}${
        places.length && rest.length ? `<tr class="ev-also"><td colspan="4">Also wrestled · ${rest.length}</td></tr>` : ''}${rest.map(w=>row(null, w, tm.get(w))).join('')}</tbody></table>${
        places.length ? '' : '<p class="sub ev-note" style="border:0">No placement rounds at this weight (pool or dual format).</p>'}`; }
    $('ev-btitle').textContent = `${S.evWt} · Bouts`; $('ev-bcount').textContent = `${wb.length} bouts`;
    renderEventHistory(e);
    const byR = new Map(); for (const b of wb){ const r=d.rounds[b[2]]||'Round'; (byR.get(r)||byR.set(r,[]).get(r)).push(b); }
    const firstSeen = [...byR.keys()];
    // placement matches first (1st, 3rd, 5th...), then numbered rounds latest first (Seventh ... First), then bracket rounds
    const NUMW = ['first','second','third','fourth','fifth','sixth','seventh','eighth','ninth','tenth','eleventh','twelfth'];
    // bracket rounds, latest first
    const BR = ['Semifinal','Semifinals','Championship Semifinals','Consolation Semifinal','Consolation Semifinals','Fourth Consolation',
      'Consolation Quarterfinal','Consolation Quarterfinals','Quarterfinal','Quarterfinals','Championship Quarterfinals','Third Consolation',
      'Second Consolation','Consolation Round Two','Second Round','Champ. Round 2','First Consolation','Consolation Round One','Cons. Round 1',
      'First Round','Champ. Round 1','Championship Preliminaries'];
    const numOf = r => { const m = /^(\w+) round$/i.exec((r||'').trim()); return m ? NUMW.indexOf(m[1].toLowerCase()) : -1; };
    const pools = firstSeen.some(r => numOf(r) >= 2);     // pool formats number their rounds past "Second Round"
    const rix = r => { const p = placePair(r); if (p) return p[0];
      const n = numOf(r); if (pools && n >= 0) return 100 - n;
      const i = BR.indexOf(r); if (i >= 0) return 20 + i;
      const j = ROUND_ORDER.indexOf(r); return j >= 0 ? 60 + j : -1; };
    const order = firstSeen.slice().sort((a,b)=>{ const ia=rix(a), ib=rix(b);
      if (ia<0 && ib<0) return firstSeen.indexOf(a)-firstSeen.indexOf(b); if (ia<0) return 1; if (ib<0) return -1; return ia-ib; });
    $('ev-bouts').innerHTML = order.map(r=>`<div class="round-h">${esc(rdName(r))}</div>${byR.get(r).map(b=>`<div class="bout">
      <div class="w">${badge(b[5], T(b[5]), 's')} ${wlink(b[3],N(b[3]))} <span class="sub">${esc(T(b[5]))}</span></div>
      <div class="l"><span class="over">over</span>${wlink(b[4],N(b[4]))} <span class="sub">${esc(T(b[6]))}</span></div>
      <div class="res">${score(d.rt[b[7]], b[8])}</div></div>`).join('')}`).join('')
      || '<p class="loading">No bouts at this weight.</p>';
  }

  /* Dual meets read like a dual sheet: every weight in order, both wrestlers side by side, the team points each bout
     earned and a running score. An event with several duals (Tuslaw Duals, regional dual tournaments) gets one sheet
     per pairing (and round). Weights with no bout in our results are shown as not recorded, and the score says it
     covers only the bouts we have: some sources leave forfeits out. */
  const DUAL_PTS = {fall:6, tf:5, md:4, dec:3, sv:3, dq:6, inj:6, ff:6, mff:6};
  // "Semifinal 1 · Dub. Coffman 58, Big Walnut 23": the official final from the results sheet, if the two names can be
  // matched to the two teams (by a shared word, so "Dub. Coffman" matches "Dublin Coffman")
  const dualWords = n => String(n||'').toLowerCase().replace(/[^a-z ]/g,' ').split(/\s+/).filter(w => w.length > 2 && !/^(high|school|the)$/.test(w));
  function officialScore(label, A, B, T){
    const m = /^(.*?)\s*·\s*(.+?)\s+(\d+)\s*,\s*(.+?)\s+(\d+)\s*$/.exec(label || ''); if (!m) return null;
    const fits = (nm, tid) => { const a = dualWords(nm), b = dualWords(T(tid)); return a.some(w => b.includes(w)); };
    const [, pre, n1, s1, n2, s2] = m;
    if (fits(n1, A) && fits(n2, B) && !(fits(n1, B) && fits(n2, A))) return {pre, a: +s1, b: +s2};
    if (fits(n1, B) && fits(n2, A) && !(fits(n1, A) && fits(n2, B))) return {pre, a: +s2, b: +s1};
    return null;
  }
  function renderDual(e, d, bouts){
    const N = id => d.names[id] || '?', T = id => d.teams[id] || '';
    const seasonWts = new Set((e.lv==='MS' ? MSROWS : ROWS).filter(r=>r.season===e.season && r.g===e.g && r.wt).map(r=>r.wt));
    // pairings in the order they first appear; the team named first in the event name goes on the left
    const nm = (e.name||'').toLowerCase(), pos = tid => { const i = nm.indexOf((T(tid)||'#').toLowerCase()); return i < 0 ? 1e9 : i; };
    const sheets = new Map();
    for (const b of bouts){ const r = d.rounds[b[2]] || '', a = Math.min(b[5], b[6]), c = Math.max(b[5], b[6]);
      const k = `${r}|${a}|${c}`; if (!sheets.has(k)) sheets.set(k, {r, teams:[a, c], bouts:[]}); sheets.get(k).bouts.push(b); }
    const html = [...sheets.values()].map(sh => {
      let [A, B] = sh.teams; if (pos(B) < pos(A)) [A, B] = [B, A];
      const wts = [...new Set([...seasonWts, ...sh.bouts.map(b=>b[1])])].filter(Boolean).sort((x,y)=>x-y);
      let sa = 0, sb = 0, got = 0;
      const rows = wts.map(wt => {
        const here = sh.bouts.filter(b=>b[1]===wt);
        if (!here.length) return `<tr class="nr"><td class="wt">${wt}</td><td colspan="3" class="sub">Not recorded</td><td class="pts"></td><td class="run sub">${sa}–${sb}</td></tr>`;
        return here.map(b => {
          const rt = d.rt[b[7]], pts = DUAL_PTS[rt] ?? 3, aWon = b[5]===A; got++;
          if (aWon) sa += pts; else sb += pts;
          const side = (wid, tid, won) => `<div class="whoflex">${badge(tid, T(tid), 's')}<div class="${won?'won':'lost'}">${wlink(wid, N(wid))}</div></div>`;
          const aCell = aWon ? side(b[3], b[5], true) : side(b[4], b[6], false), bCell = aWon ? side(b[4], b[6], false) : side(b[3], b[5], true);
          return `<tr><td class="wt">${wt}</td><td>${aCell}</td><td class="res">${score(rt, b[8])}</td><td>${bCell}</td>
            <td class="pts">${aWon ? `<b>${pts}</b>–0` : `0–<b>${pts}</b>`}</td><td class="run">${sa}–${sb}</td></tr>`; }).join(''); }).join('');
      const missing = wts.filter(w => !sh.bouts.some(b=>b[1]===w)).length;
      const off = officialScore(sh.r, A, B, T);
      const fa = off ? off.a : sa, fb = off ? off.b : sb;
      const lead = fa === fb ? 'Tied' : `${esc(T(fa > fb ? A : B))} wins`;
      const note = off
        ? `${lead}. Final score from the results${(off.a !== sa || off.b !== sb) ? `; the ${got} bout${got===1?'':'s'} we have add up to ${sa}–${sb}` + (missing ? ` (${missing} weight${missing===1?'':'s'} not recorded, likely forfeits)` : '') : ''}.`
        : `${sa||sb ? lead + ', ' : ''}${got} contested bout${got===1?'':'s'}${missing ? ` · ${missing} weight${missing===1?'':'s'} not recorded, so this score covers only the bouts we have` : ''}. Fall 6, tech fall 5, major 4, decision 3.`;
      // the round name without the score or the "X v. Y" the heading already says
      const rname = off ? off.pre : String(rdName(sh.r)||'').replace(/\s*[-·]\s*[^-·]+\sv(s)?\.?\s[^-·]+$/i, '');
      const generic = !rname || /^(dual|round)$/i.test(rname);
      return `<div class="card dual">
        ${sheets.size > 1 || !generic ? `<div class="card-head"><h2>${generic ? '' : esc(rname) + ' · '}${esc(T(A))} vs. ${esc(T(B))}</h2></div>` : ''}
        <div class="dual-score"><div class="ds-team">${badge(A, T(A))}<span>${tlink(A, T(A))}</span><b>${fa}</b></div>
          <div class="ds-team">${badge(B, T(B))}<span>${tlink(B, T(B))}</span><b>${fb}</b></div>
          <p class="sub">${note}</p></div>
        <div class="scroll"><table class="dual-t"><thead><tr><th>Wt</th><th>${esc(T(A))}</th><th>Result</th><th>${esc(T(B))}</th><th class="pts">Pts</th><th class="run">Score</th></tr></thead>
        <tbody>${rows}</tbody></table></div></div>`; }).join('');
    $('ev-btitle').closest('.card').hidden = true;
    let box = $('ev-duals'); if (!box){ box = document.createElement('div'); box.id = 'ev-duals'; $('ev-btitle').closest('.card').after(box); }
    box.hidden = false; box.innerHTML = html || '<p class="loading">No bouts recorded for this dual.</p>';
  }

  /* events run on wrestle.live (wlsite.py -> wl/index.json, wl/<eid>.json, wl/pbp/<eid>.json): official results,
     pools, bracket, bout numbers and mats, dual order with forfeits, and play-by-play in a bout window. */
  let WLI = null; const loadWLI = () => WLI ||= fetch('wl/index.json').then(r=>r.ok?r.json():{}).catch(()=>({}));
  const WLD = {}; const loadWL = eid => WLD[eid] ||= fetch(`wl/${eid}.json`).then(r=>r.ok?r.json():null).catch(()=>null);
  const WLP = {}; const loadWLP = eid => WLP[eid] ||= fetch(`wl/pbp/${eid}.json`).then(r=>r.ok?r.json():{}).catch(()=>({}));
  /* events on wrestle.live before their results are here: upcoming, live, and finished ones this site has not taken in yet.
     Read from wrestle.live when a page that shows them opens (their list is open to any site); nothing shows if it can't be reached.
     Teams carry this site's school ids ('h246', 'm246'); api/v1/moved.json maps ids that no longer exist to the school's id now. */
  let WLUP = null, MOVED = {}, WL_DOWN = false;
  const WL_LIST = 'https://wrestle.live/api/results/events.json';
  const loadWLUp = () => WLUP ||= Promise.all([
      fetch(WL_LIST, window.AbortSignal && AbortSignal.timeout ? {signal: AbortSignal.timeout(8000)} : {}).then(r=>r.ok?r.json():null).catch(()=>null).then(L=>{ WL_DOWN = !L; return L; }),
      loadWLI(), fetch('api/v1/moved.json').then(r=>r.ok?r.json():{}).catch(()=>({})), loadY()])
    .then(([L, I, moved, Y]) => { MOVED = moved || {};
      const have = new Set([...Object.values(I).map(x=>x[0]), ...Y.events.map(y=>y.id)]), today = new Date(Date.now() - 6*3600e3).toISOString().slice(0,10);
      const ok = u => /^https:\/\/wrestle\.live\//.test(u || '');
      const tid = id => { const m = /^[hm](\d+)$/.exec(moved[id] || id || ''); return m ? +m[1] : null; };
      return ((L && L.events) || []).filter(e => e && e.eventId && e.name && Array.isArray(e.dates) && e.dates.length && ok(e.liveUrl)
          && !have.has(e.eventId) && (e.status !== 'final' || e.dates.at(-1) >= new Date(Date.now() - 45*86400e3).toISOString().slice(0,10)))
        .map(e => ({id: e.eventId, name: String(e.name), url: e.liveUrl, res: ok(e.url) ? e.url : null, d0: e.dates[0], d1: e.dates.at(-1),
          st: e.status === 'final' ? 'final' : e.status === 'live' || (e.dates[0] <= today && today <= e.dates.at(-1)) ? 'live' : 'upcoming',
          where: String(e.location || ''), host: String(e.host || ''), lv: (Array.isArray(e.levels) ? e.levels : [e.level]).filter(x=>['hs','ms','youth'].includes(x)), g: ['boys','girls','mixed','coed'].includes(e.gender) ? e.gender : null, type: e.type,
          sid: e.rankingsSeriesId != null && SERIES.has(+e.rankingsSeriesId) ? +e.rankingsSeriesId : null,
          teams: (e.teams || []).filter(t=>t && t.name).map(t => ({name: String(t.name), tid: tid(t.rankingsId), ms: /^m/.test(String(t.rankingsId||''))}))}))
        .sort((a,b) => (a.st==='live' ? 0 : a.st==='upcoming' ? 1 : 2) - (b.st==='live' ? 0 : b.st==='upcoming' ? 1 : 2)
          || (a.st==='final' ? b.d0.localeCompare(a.d0) : a.d0.localeCompare(b.d0)) || a.name.localeCompare(b.name));
    }).catch(() => []);
  const wlDates = u => { const f = (d, y) => new Date(d+'T12:00:00').toLocaleDateString('en-US', {weekday:'short', month:'short', day:'numeric', ...(y ? {year:'numeric'} : {})});
    return u.d0 === u.d1 ? f(u.d0, 1) : `${f(u.d0)} to ${f(u.d1, 1)}`; };
  const wlChip = u => u.st==='live' ? '<span class="wl-chip live">Live now</span>' : u.st==='final' ? '<span class="wl-chip">Finished</span>' : '';
  const wlOut = (u, text) => `<a class="lnk" href="${esc(u.url)}" target="_blank" rel="noopener">${text}<span aria-hidden="true"> ↗</span><span class="sr"> on wrestle.live (opens in a new tab)</span></a>`;
  const wlKind = u => [u.lv.map(x=>({hs:'High school', ms:'Middle school', youth:'Youth'})[x]).filter(Boolean).join(' and '),
    u.g==='girls' ? 'Girls' : u.g==='boys' ? 'Boys' : u.g==='mixed' || u.g==='coed' ? 'Boys and girls' : ''].filter(Boolean).join(' · ');
  // Events page: one card above the results list
  async function wlUpcoming(){
    const box = $('e-wl'), U = await loadWLUp();
    if (!U.length){ box.hidden = true; return; }
    const live = U.some(u=>u.st==='live');
    box.hidden = false;
    box.innerHTML = `<h2>${live ? 'Live and coming up' : 'Coming up'} on wrestle<b style="color:var(--orange)">.live</b></h2>
      <p class="sub">Open an event for its teams, favorites and matches to watch. Brackets and live results are on wrestle.live; final results and ratings show up here after the event.</p>
      <ul class="wlu">${U.map(u=>{ const past = u.sid!=null ? SERIES.get(u.sid).slice().sort((a,b)=>b.date.localeCompare(a.date))[0] : null;
        return `<li><div class="wlu-h">${wlChip(u)}${u.st==='final' ? wlOut(u, esc(u.name)) : `<a class="lnk" href="${hPV(u)}">${esc(u.name)}</a>`}</div>
          <div class="wlu-m">${[wlDates(u), esc(u.where), wlKind(u), u.st!=='final' ? wlOut(u, u.st==='live' ? 'Live results' : 'Brackets and registration') : '', past ? `<a href="${hE(past.eid)}">${esc(past.season)} results</a>` : ''].filter(Boolean).join(' · ')}</div>
          ${u.teams.length ? `<details><summary>${u.teams.length} team${u.teams.length>1?'s':''} entered</summary><p class="wlu-teams">${u.teams.map(t=>t.ms ? mtlink(t.tid, t.name) : tlink(t.tid, t.name)).join(' · ')}</p></details>` : ''}</li>`; }).join('')}</ul>`;
  }
  // team page: the team's next events on wrestle.live;  event page: this year's edition of the same event
  async function wlNext(boxId, before, pick, label){
    const box = wlBox(boxId, before); box.className = 'wl-next'; box.hidden = true;
    const U = (await loadWLUp()).filter(u=>u.st!=='final' && pick(u)).slice(0, 3);
    if (!U.length || !label()) return;
    box.hidden = false;
    box.innerHTML = `<span class="wl-chip">${label()} on wrestle<b>.live</b></span>` + U.map(u=>`<span>${wlChip(u)} <a class="lnk" href="${hPV(u)}">${esc(u.name)}</a> <span class="sub">${wlDates(u)}${u.where ? ' · ' + esc(u.where) : ''}</span></span>`).join('');
  }
  const hPV = u => `#preview/${encodeURIComponent(u.id)}`;
  // the band's logo tile: the host school's logo, else its initials; nothing when the host is not known
  function wlLogo(el, tid, name){
    if (tid == null && !name){ el.hidden = true; return; }
    el.hidden = false; el.innerHTML = LOGOS[tid] ? `<img src="logos/${LOGOS[tid]}" alt="" width="74" height="74">` : esc(teamIni(name || '')); }
  const wlTab = '<span class="sr"> (opens in a new tab)</span>';
  // the "Run on wrestle.live" chip: a link to the event's page there while it is up, else to wrestle.live
  const wlRunChip = url => `<a class="ol" href="${esc(/^https:\/\/wrestle\.live\//.test(url || '') ? url : 'https://wrestle.live/')}" target="_blank" rel="noopener">Run on wrestle<b>.live</b><span aria-hidden="true"> ↗</span>${wlTab}</a>`;
  async function shareThis(btn, label){ const url = location.href;
    try { if (navigator.share) { await navigator.share({title: document.title, url}); return; }
      await navigator.clipboard.writeText(url); $('live').textContent = 'Link copied'; btn.textContent = 'Link copied'; setTimeout(()=>{ btn.textContent = label; }, 2500); }
    catch(err) { $('live').textContent = 'Copy this page address to share it'; } }
  const wlBox = (id, before) => { let b = $(id); if (!b){ b = document.createElement('div'); b.id = id; before.before(b); } return b; };
  const wlName = (X, w) => { const x = X.w[w]; return !x ? 'Bye' : x[1] && hasProfile(x[1]) ? wlink(x[1], x[0]) : `<span style="font-weight:600">${esc(x[0])}</span>`; };
  const wlTeam = (X, w) => { const x = X.w[w]; const t = x && X.teams[x[2]]; return t ? esc(t[0]) : ''; };
  const WL_PTS = {fall:6, ff:6, mff:6, inj:6, dq:6, tf:5, md:4, dec:3, sv:3};
  const wlRes = b => b[15] ? `${RTL[b[15]] || ''}${b[16] ? ' ' + esc(b[16]) : ''}` : '';
  async function wlEvent(e, view){
    const wbox = wlBox('ev-wlw', $('ev-grid'));
    wbox.hidden = true; wbox.innerHTML = '';
    const I = await loadWLI(), ix = I[e.eid]; if (!ix || S.event !== e.eid) return;
    const [, live, until] = ix, open = new Date().toISOString().slice(0,10) <= until;
    await loadSchools(); if (S.event !== e.eid) return;
    wlBand(e, live, open ? until : null);
    const X = await loadWL(e.eid); if (!X || S.event !== e.eid) return;
    if (view === 'dual') wlDual(e, X);
    else if (view > 0) wlWeight(e, X, view, wbox);
    const q = new URLSearchParams(location.search).get('bout'); if (q && X.bouts.some(b=>b[0]===q)) wlOpenBout(e, X, q);
  }
  // the band for results run on wrestle.live: chips, host logo, share and wrestle.live links, then the numbers
  async function wlBand(e, live, until){
    const h = e.host != null ? (TBY.get(e.host)||[]).at(-1) : null;
    $('ev-head').classList.add('evband'); if (postS(e)){ $('ev-mono').hidden = false; $('ev-mono').innerHTML = OHSAA_IMG; } else wlLogo($('ev-mono'), h ? e.host : null, h ? h.name : '');
    $('ev-chips').hidden = false;
    $('ev-chips').innerHTML = `<span class="gold">Official results</span>${wlRunChip(until ? live : null)}<span class="k">${esc($('ev-eyebrow').textContent)}</span>`;
    $('ev-acts').hidden = false;
    $('ev-acts').innerHTML = `<button type="button" class="btn" id="ev-share">Share results</button>${until ? `<a class="lnk" href="${esc(live)}" target="_blank" rel="noopener">Event page on wrestle.live<span aria-hidden="true"> ↗</span>${wlTab}</a>` : ''}`;
    $('ev-share').onclick = () => shareThis($('ev-share'), 'Share results');
    $('ev-built').hidden = false;
    $('ev-built').innerHTML = `<div><b>This page built itself.</b><p>${esc(evName(e.name))} ran on wrestle.live. When the last bout ended, the official results and brackets landed here and in every wrestler's record, and they stay here.</p></div>
      <a class="btn" href="https://wrestle.live/" target="_blank" rel="noopener">Run your tournament on wrestle.live${wlTab}</a>`;
    // the numbers: bouts and falls, teams, then (high school) ranked entrants, top seeds that won, upsets
    const [d, X] = await Promise.all([loadSeason(e.season, e.lv), e.lv === 'MS' ? null : loadEvx(e.eid)]); if (S.event !== e.eid) return;
    const bs = d.byEvent.get(e.eid) || [], falls = bs.filter(b=>d.rt[b[7]]==='fall').length;
    const teams = new Set(), ws = new Set(); for (const b of bs){ for (const t of [b[5], b[6]]) if (t != null) teams.add(t); for (const w of [b[3], b[4]]) if (w != null) ws.add(w); }
    const x = X && X[e.eid] && X[e.eid].s, n = v => v.toLocaleString();
    if (teams.size > 1) $('ev-sub').textContent = `${fmtDate(e.date)} · ${n(teams.size)} teams`;
    const tiles = [[n(e.bouts), `bouts${falls ? ` · ${n(falls)} falls` : ''}`]];
    if (x && x[1]) tiles.push([`${n(x[1])} of ${n(x[0])}`, 'entrants in the state top 20 going in']);
    else tiles.push([n(ws.size), 'wrestlers']);
    if (x && x[3]) tiles.push([`${x[4]} of ${x[3]}`, `weight${x[3] > 1 ? 's' : ''} won by the best-ranked entrant`]);
    if (x) tiles.push([n(x[2]), `upset${x[2] === 1 ? '' : 's'} by our ratings`]);
    else if (teams.size > 1) tiles.push([n(teams.size), 'teams']);
    $('ev-stats').hidden = false;
    $('ev-stats').innerHTML = tiles.map(([b, t]) => `<div><b>${b}</b><span>${t}</span></div>`).join('');
  }
  function wlBoutBox(X, b, cls=''){
    const won = s => b[14] && b[14] === b[8 + s];
    const line = s => { const w = b[8 + s]; if (!w) return `<div class="wl-ln sub">${b[12 + s] ? esc(b[12 + s]) : 'Bye'}</div>`;
      const pre = b[10 + s] ? `<span class="sd">${b[10 + s]}</span>` : b[12 + s] ? `<span class="sd">${esc(b[12 + s])}</span>` : '';
      return `<div class="wl-ln${won(s) ? ' won' : ''}">${pre}<span>${esc(X.w[w]?.[0] || '?')}</span><span class="sub"> ${wlTeam(X, w)}</span></div>`; };
    const head = [b[19] ? ord(b[19]) + ' place' : esc(b[6] || ''), b[2] ? 'Bout ' + b[2] : '', b[3] ? esc(b[3]) : ''].filter(Boolean).join(' · ');
    const can = b[14] && b[15] !== 'bye';
    return `<${can ? 'button type="button"' : 'div'} class="wl-bout ${cls}${b[19]===1 ? ' gold' : ''}" ${can ? `data-wlb="${esc(b[0])}"` : ''}>
      <div class="wl-bh">${head}</div>${line(0)}${line(1)}${can ? `<div class="wl-br">${wlRes(b)}</div>` : ''}</${can ? 'button' : 'div'}>`;
  }
  function wlWeight(e, X, wt, box){
    const W = X.weights.find(w => +w[1] === wt); if (!W) return;
    const bs = X.bouts.filter(b => b[1] === W[0] && !(b[15] === 'bye' && !b[14]));
    let html = '';
    if (W[3].length){
      html += `<div class="card"><div class="card-head"><h2>${wt} · Pools</h2><span class="sub">${W[3].length} pool${W[3].length>1?'s':''} · official standings</span></div>
        <div class="wl-pools">${W[3].map(([name, rows, adv]) => `<div class="wl-pool"><div class="wl-ph">${esc(name)}</div>
          ${rows.map(([w, rk, wi, lo, held]) => `<div class="wl-pr${adv.includes(w) ? ' adv' : ''}"><span class="rk">${held ? '–' : rk}</span><span>${wlName(X, w)}<br><span class="sub">${wlTeam(X, w)}</span></span><b>${wi}-${lo}</b></div>`).join('')}
          ${rows.some(r=>r[4]) ? '<p class="sub" style="margin:6px 10px">A tie the head table had not broken is shown without a place.</p>' : ''}
          <details class="wl-pb"><summary>Bouts</summary>${bs.filter(b=>b[7]===name).sort((a,b)=>a[5]-b[5]||(a[2]||0)-(b[2]||0)).map(b=>wlBoutBox(X, b, 'flat')).join('')}</details></div>`).join('')}</div>
        ${W[3].some(p=>p[2].length) ? '<p class="sub ev-note" style="border:0">Highlighted: advanced to the bracket.</p>' : ''}</div>`;
    }
    const br = bs.filter(b => b[4] !== 'pool' && b[15] !== 'bye' && b[8] && b[9]);
    if (br.length){
      const order = {champ:0, cons:1, place:2};
      const cols = new Map();
      for (const b of br.sort((a,c)=>(order[a[4]]??3)-(order[c[4]]??3) || a[5]-c[5] || (a[2]||0)-(c[2]||0))){
        const k = b[4] === 'place' ? 'place' : `${b[4]}|${b[5]}`; (cols.get(k) || cols.set(k, {b:b[4], label: b[4]==='place' ? 'Placement' : b[6], list:[]}).get(k)).list.push(b); }
      const sec = kind => [...cols.values()].filter(c => c.b === kind);
      const row = (title, cs) => cs.length ? `<h3 class="wl-h3">${title}</h3><div class="wl-cols">${cs.map(c => `<div class="wl-col"><div class="wl-ch">${esc(c.label || '')}</div><div class="wl-cb">${c.list.map(b=>wlBoutBox(X, b)).join('')}</div></div>`).join('')}</div>` : '';
      html += `<div class="card"><div class="card-head"><h2>${wt} · Bracket</h2><span class="sub">tap a bout for its play-by-play</span></div><div class="wl-brk">
        ${row('Championship', sec('champ'))}${row('Consolation', sec('cons'))}${row('Placement matches', sec('place'))}${row('Other', [...cols.values()].filter(c=>!(c.b in order)))}</div></div>`;
    }
    if (!html) return;
    box.innerHTML = html; box.hidden = false;
    box.onclick = ev => { const t = ev.target.closest('[data-wlb]'); if (t) wlOpenBout(e, X, t.dataset.wlb); };
  }
  function wlDual(e, X){
    const box = $('ev-duals'); if (!box) return;
    const html = X.duals.map(([id, home, away, order, hs, as]) => {
      const T = t => X.teams[t] ? X.teams[t][0] : '', TT = t => X.teams[t] && X.teams[t][1] ? tlink(X.teams[t][1], T(t)) : esc(T(t));
      const wt = Object.fromEntries(X.weights.map(w => [w[0], w[1]]));
      const mine = X.bouts.filter(b => b[21] === id);
      const side = (b, s) => b[8 + s] ? X.w[b[8 + s]][2] : null;
      let h = 0, a = 0;
      const rowOf = b => { const won = b[14], wt_ = X.w[won]?.[2], pts = b[23] ? 0 : (WL_PTS[b[15]] ?? 3);
        const hw = wt_ === home, aw = wt_ === away;
        if (!b[23]){ if (hw) h += pts; else if (aw) a += pts; }
        const who = t => { const w = b[8] && X.w[b[8]][2] === t ? b[8] : b[9] && X.w[b[9]][2] === t ? b[9] : null;
          return w ? `<div class="${won === w ? 'won' : 'lost'}">${wlName(X, w)}</div>` : '<span class="sub">No entry</span>'; };
        const can = b[14] && b[20];
        return `<tr${can ? ` class="wl-click" data-wlb="${esc(b[0])}" tabindex="0"` : ''}><td class="wt">${wt[b[1]] || ''}</td><td>${who(home)}</td>
          <td class="res">${b[15] ? wlRes(b) : '<span class="sub">Double forfeit</span>'}</td><td>${who(away)}</td>
          <td class="pts">${b[23] ? '<span class="sub">Exh.</span>' : hw ? `<b>${pts}</b>–0` : aw ? `0–<b>${pts}</b>` : '0–0'}</td><td class="run">${b[23] ? '' : `${h}–${a}`}</td></tr>`; };
      const main = mine.filter(b => !b[23]).sort((x, y) => (order.indexOf(x[1]) - order.indexOf(y[1])) || ((x[22]||0) - (y[22]||0)));
      const exh = mine.filter(b => b[23]).sort((x, y) => (x[22]||0) - (y[22]||0));
      const rows = main.map(rowOf).join('');
      const fh = hs ?? h, fa = as ?? a, start = wt[order[0]];
      return `<div class="card dual">${X.duals.length > 1 ? `<div class="card-head"><h2>${esc(T(home))} vs. ${esc(T(away))}</h2></div>` : ''}
        <div class="dual-score"><div class="ds-team">${badge(X.teams[home]?.[1], T(home))}<span>${TT(home)}</span><b>${fh}</b></div>
          <div class="ds-team">${badge(X.teams[away]?.[1], T(away))}<span>${TT(away)}</span><b>${fa}</b></div>
          <p class="sub">${fh === fa ? 'Tied' : esc(T(fh > fa ? home : away)) + ' wins'}. Official score, every weight including forfeits${start ? `; started at ${start}` : ''}. Bouts in the order wrestled; tap one for its play-by-play.</p></div>
        <div class="scroll"><table class="dual-t"><thead><tr><th>Wt</th><th>${esc(T(home))}</th><th>Result</th><th>${esc(T(away))}</th><th class="pts">Pts</th><th class="run">Score</th></tr></thead><tbody>${rows}
          ${exh.length ? `<tr class="ev-also"><td colspan="6">Exhibition bouts · rated like any bout, not in the team score</td></tr>${exh.map(rowOf).join('')}` : ''}</tbody></table></div></div>`; }).join('');
    if (!html) return;
    box.innerHTML = html; box.hidden = false;
    box.onclick = ev => { const t = ev.target.closest('[data-wlb]'); if (t) wlOpenBout(e, X, t.dataset.wlb); };
    box.onkeydown = ev => { const t = ev.target.closest('[data-wlb]'); if (t && (ev.key === 'Enter' || ev.key === ' ')){ ev.preventDefault(); wlOpenBout(e, X, t.dataset.wlb); } };
  }
  const WL_MOVE = {takedown:'Takedown', escape:'Escape', reversal:'Reversal', stalling:'Stalling', stallingWarning:'Stalling warning', caution:'Caution',
    cautionWarning:'Caution warning', penalty:'Penalty', unsportsmanlike:'Unsportsmanlike conduct', flagrant:'Flagrant misconduct', correction:'Score correction', other:'Other'};
  const wlMove = m => WL_MOVE[m] || (/^nearfall(\d)/.test(m) ? `Near fall (${m.slice(8)})` : /Disqualification$/.test(m) ? 'Disqualification' : m);
  async function wlOpenBout(e, X, id){
    const b = X.bouts.find(x => x[0] === id); if (!b) return;
    let dlg = $('wl-dlg');
    if (!dlg){ dlg = document.createElement('dialog'); dlg.id = 'wl-dlg'; dlg.setAttribute('aria-labelledby', 'wl-dt'); document.body.append(dlg);
      dlg.addEventListener('close', () => { const u = new URL(location.href); if (u.searchParams.has('bout')){ u.searchParams.delete('bout'); history.replaceState(history.state, '', u.pathname + u.search + u.hash); } });
      dlg.addEventListener('click', ev => { if (ev.target === dlg) dlg.close(); }); }
    const u = new URL(location.href); u.searchParams.set('bout', id); history.replaceState(history.state, '', u.pathname + u.search + u.hash);
    const P = (await loadWLP(e.eid))[id] || null;
    const nm = s => esc(X.w[b[8 + s]]?.[0] || '?'), tm = s => wlTeam(X, b[8 + s]);
    const sw = b[14] === b[8] ? 0 : 1, wtn = (X.weights.find(w => w[0] === b[1]) || [])[1] || '';
    const head = [b[19] ? ord(b[19]) + ' place' : esc(b[6] || ''), wtn, b[2] ? 'Bout ' + b[2] : '', b[3] ? esc(b[3]) : ''].filter(Boolean).join(' · ');
    const slotOf = w => w === b[8] ? 0 : w === b[9] ? 1 : null;
    let body = '';
    if (P && P.events && P.events.length){
      const st = [{td:0, e:0, r:0, nf:0, pen:0}, {td:0, e:0, r:0, nf:0, pen:0}];
      for (const v of P.events){ const s = slotOf(v.wrestlerId), to = v.scoredFor != null ? slotOf(v.scoredFor) : s;
        if (s == null) continue;
        if (v.move === 'takedown') st[s].td++; else if (v.move === 'escape') st[s].e++; else if (v.move === 'reversal') st[s].r++;
        else if (/^nearfall/.test(v.move)) st[s].nf += v.points || 0; else if (v.points && to !== s) st[to].pen += v.points; }
      const per = new Map((P.periods || []).map(p => [p.label, p]));
      let lastP = null; const rows = [];
      for (const v of P.events){
        if (v.period !== lastP){ lastP = v.period; const p = per.get(v.period), c = p && p.choice;
          const lab = {P1:'Period 1', P2:'Period 2', P3:'Period 3', SV:'Sudden victory', TB1:'Tiebreaker 1', TB2:'Tiebreaker 2', UTB:'Ultimate tiebreaker'}[v.period] || v.period;
          rows.push(`<li class="wl-pe">${lab}${c ? ` · ${esc(X.w[c.wrestlerId]?.[0].split(' ').at(-1) || '')} ${c.position === 'defer' ? 'deferred' : 'chose ' + esc(c.position)}` : ''}</li>`); }
        const s = slotOf(v.wrestlerId), to = v.scoredFor != null ? slotOf(v.scoredFor) : s;
        const pts = v.points < 0 ? `<b class="sub">−${-v.points}</b>` : v.points ? `<b class="s${to}">+${v.points}${to !== s && to != null ? ' ' + esc(X.w[b[8 + to]]?.[0].split(' ').at(-1) || '') : ''}</b>` : '';
        rows.push(`<li><span class="sub">${esc(v.clock || '')}</span><span><b>${esc(X.w[v.wrestlerId]?.[0].split(' ').at(-1) || '')}</b> ${v.move === 'other' ? (v.points < 0 ? ' · Points taken off' : '') : ' · ' + esc(wlMove(v.move))}</span>${pts}<span class="sc">${(v.score || []).join('–')}</span></li>`); }
      const S2 = k => `<td><b>${st[0][k]}</b></td>`;
      body = `<div class="wl-pbp"><ol class="wl-ev">${rows.join('')}</ol>
        <div class="wl-st">${P.events.every(v => v.move === 'other') ? '' : `<table><thead><tr><th>${esc(X.w[b[8]]?.[0].split(' ').at(-1) || '')}</th><th></th><th>${esc(X.w[b[9]]?.[0].split(' ').at(-1) || '')}</th></tr></thead><tbody>
          ${[['td','Takedowns'],['e','Escapes'],['r','Reversals'],['nf','Near-fall points'],['pen','Penalty points received']].map(([k, l]) => `<tr><td><b>${st[0][k]}</b></td><td class="sub">${l}</td><td><b>${st[1][k]}</b></td></tr>`).join('')}
        </tbody></table>`}
        <p class="sub">Scored on the mat tablet. Score is ${esc(X.w[b[8]]?.[0].split(' ').at(-1) || '')}–${esc(X.w[b[9]]?.[0].split(' ').at(-1) || '')}; clock is time into the period.${P.corrected ? ' The head table changed the result afterwards, so the moves may not add up to the final.' : ''}</p></div></div>`;
    } else body = `<p class="sub" style="padding:16px 20px">${P && P.scoredOn === 'paper' || b[20] === 'paper' ? 'Scored on a paper bout sheet: the final result only.' : 'No play-by-play for this bout.'}</p>`;
    dlg.innerHTML = `<div class="wl-dh"><div class="wl-dtop"><span class="wl-dk">${head}</span><span class="wl-dbtn"><button type="button" class="btn ghost" data-copy aria-label="Copy link to this bout"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1"/><path d="M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1"/></svg><span class="lg">Copy link</span></button><button type="button" class="btn ghost" data-x aria-label="Close">✕</button></span></div>
      <div class="wl-dsc"><div><span id="wl-dt" class="wl-dn${sw===0?'':' l'}">${nm(0)}</span><span class="sub">${tm(0)}</span></div><div class="wl-dr">${wlRes(b)}</div><div style="text-align:right"><span class="wl-dn${sw===1?'':' l'}">${nm(1)}</span><span class="sub">${tm(1)}</span></div></div></div>${body}`;
    dlg.querySelector('[data-x]').onclick = () => dlg.close();
    dlg.querySelector('[data-copy]').onclick = ev => { navigator.clipboard?.writeText(location.href).then(() => { ev.currentTarget.lastElementChild.textContent = 'Copied'; }).catch(()=>{}); };
    if (!dlg.open) dlg.showModal();
  }
  const EVX = {}; const loadEvx = eid => EVX[eid % 50] ||= fetch(`evx/${eid % 50}.json`).then(r=>r.ok?r.json():{}).catch(()=>({}));
  let EVPL = null; const loadEvPlaces = () => EVPL ||= fetch('evplaces.json').then(r=>r.ok?r.json():{}).catch(()=>({}));
  let TSC = null; const loadTeamScores = () => TSC ||= fetch('teamscores.json').then(r=>r.ok?r.json():{}).catch(()=>({}));
  const evOverBox = () => { let b = $('ev-over'); if (!b){ b = document.createElement('div'); b.id = 'ev-over'; b.hidden = true;
    $('ev-grid').before(b); } return b; };
  /* A tournament at a glance: team standings (the official team scores when the results include them; otherwise
     teams ranked by champions, then finalists, then placers, never a made-up score) and every weight's top three. */
  function renderEventOverview(e, d, ws, placesAt, TS, N, T, bouts){
    $('ev-grid').hidden = true; $('ev-hist').hidden = true;
    const agg = new Map(), add = (t, p) => { const a = agg.get(t) || agg.set(t, {c:0, f:0, p:0}).get(t); if (p===1) a.c++; if (p<=2) a.f++; if (p<=8) a.p++; };
    const rows = ws.map(wt => { const pl = placesAt(wt); for (const [p,, t] of pl) add(t, p); return [wt, pl]; });
    const A = t => agg.get(t) || {c:0, f:0, p:0};
    let teams, note;
    if (TS){ teams = TS.map(([name, score, tid]) => ({tid, name: tid != null && T(tid) ? T(tid) : name, score, ...A(tid)}));
      note = 'Official team scores from the results.'; }
    else { teams = [...agg].map(([tid, a]) => ({tid, name: T(tid), ...a})).sort((x,y)=>y.c-x.c || y.f-x.f || y.p-x.p || x.name.localeCompare(y.name));
      note = 'The official team scores are not in our results, so teams are ranked by champions, then finalists, then placers.'; }
    // tied teams share a place, marked T-15 on every tied row (the next place after a two-way tie at 15 is 17)
    const same = (a, b) => !!a && !!b && (TS ? a.score===b.score : a.c===b.c && a.f===b.f && a.p===b.p);
    const place = []; teams.forEach((t, i) => place.push(same(teams[i-1], t) ? place[i-1] : i + 1));
    const rk = i => (same(teams[i-1], teams[i]) || same(teams[i], teams[i+1])) ? `<span class="tie" title="Tied for ${place[i]}"><span class="tt">T-</span>${place[i]}</span>` : place[i];
    const fmtS = x => Number.isInteger(x) ? x : x.toFixed(1);
    const who = x => x ? `<div class="whoflex">${badge(x[2], T(x[2]), 's')}<div>${wlink(x[1], N(x[1]))}<span class="evrk" data-rkw="${x[1]}" data-rkwt="${x[3] ? x[3][1] : ''}"></span>${sl([esc(T(x[2]))])}</div></div>` : '<span class="sub">—</span>';
    $('ev-over').innerHTML = `<div class="grid2 ev-over-grid">
      <div class="card"><div class="card-head"><h2>Team standings</h2><span class="sub">${teams.length} teams</span></div>
        <p class="sub ev-note">${note}</p>
        <div class="scroll"><table><thead><tr><th>#</th><th>Team</th>${TS ? '<th class="num">Score</th>' : ''}<th class="num">Champs</th><th class="num lg">Finalists</th><th class="num">Placers</th></tr></thead><tbody>
        ${teams.map((t, i) => `<tr><td class="rk">${rk(i)}</td><td><div class="whoflex">${badge(t.tid, t.name, 's')}<span>${t.tid != null ? ((EVBY.get(S.event)||{}).lv==='MS' ? mtlink : tlink)(t.tid, t.name) : esc(t.name)}</span></div></td>
          ${TS ? `<td class="num"><b>${fmtS(t.score)}</b></td>` : ''}<td class="num">${t.c || ''}</td><td class="num lg">${t.f || ''}</td><td class="num">${t.p || ''}</td></tr>`).join('')}
        </tbody></table></div></div>
      <div class="card"><div class="card-head"><h2>Champions and finals</h2><span class="sub">${ws.length} weights</span></div>
        <div class="scroll"><table class="ev-finals"><thead><tr><th>Wt</th><th>Champion</th><th>Final</th><th class="ru">Runner-up</th><th class="lg">3rd</th></tr></thead><tbody>
        ${rows.map(([wt, pl]) => { const g = p => pl.find(x=>x[0]===p), c = g(1), fb = c && c[3];
          return `<tr><td><button type="button" class="wtlink" data-ew="${wt}">${wt}</button></td><td>${who(c)}</td>
            <td class="res">${fb ? score(d.rt[fb[7]], fb[8]) : ''}${g(2) ? `<span class="ru-sm">over ${wlink(g(2)[1], N(g(2)[1]))}<br><span class="sub">${esc(T(g(2)[2]))}</span></span>` : ''}</td><td class="ru">${who(g(2))}</td><td class="lg">${who(g(3))}</td></tr>`; }).join('')}
        </tbody></table></div>
        ${rows.some(([, pl]) => !pl.length) ? '<p class="sub ev-note">A weight with no places here used pools or had no placement rounds in our results: open it for every bout.</p>' : ''}</div>
    </div>`;
    $('ev-over').hidden = false;
    // from our ratings (evextra.py): each placer's state rank going in, and the biggest upsets
    if (e.level !== 'MS') loadEvx(e.eid).then(all => { const x = all[e.eid]; if (!x || S.event !== e.eid || S.evWt !== 0) return;
      for (const el of $('ev-over').querySelectorAll('.evrk')){ const r = (x.r || {})[el.dataset.rkw]; if (!r) continue;
        const at = +el.dataset.rkwt && r[1] !== +el.dataset.rkwt ? ` at ${r[1]}` : '';
        el.innerHTML = ` <span class="chip rkin" title="State rank at ${r[1]} on the last weekly list before this event">#${r[0]}${at}</span>`; }
      const ups = (x.u || []).map(([pct, wt, w, l]) => { const b = bouts.find(b => b[1]===wt && b[3]===w && b[4]===l); return b ? {pct, wt, b} : null; }).filter(Boolean);
      $('ev-over').querySelectorAll('.ev-ups').forEach(x=>x.remove());
      if (ups.length) $('ev-over').insertAdjacentHTML('beforeend', `<div class="card ev-ups"><div class="card-head"><h2>Biggest upsets</h2><span class="sub">the winner's chance before the bout, from our ratings</span></div>
        <div class="ev-upgrid">${ups.map(({pct, wt, b}) => `<div class="ev-up"><div class="top"><b>${pct}%</b><span class="sub">${wt} · ${esc(d.rounds[b[2]] || '')}</span></div>
          <div class="bar" aria-hidden="true"><i style="width:${pct}%"></i></div>
          <div>${wlink(b[3], N(b[3]))} <span class="sub">${esc(T(b[5]))}</span></div>
          <div class="sub">${score(d.rt[b[7]], b[8])} over ${wlink(b[4], N(b[4]))}, ${esc(T(b[6]))}</div></div>`).join('')}</div></div>`); });
    $('ev-over').onclick = ev => { const b = ev.target.closest('[data-ew]'); if (b){ S.evWt = +b.dataset.ew; renderEvent(); } };
  }
  // champions of this event in every season we have, at the weight being viewed
  let CHAMPS = null, CHAMPS_P = null;
  async function renderEventHistory(e){
    const all = (e.sid!=null ? SERIES.get(e.sid) : null) || [];
    if (all.length < 2 || e.type==='dual'){ $('ev-hist').hidden = true; return; }
    const want = e.eid, wt = S.evWt;
    CHAMPS = CHAMPS || await (CHAMPS_P || (CHAMPS_P = fetch('champs.json').then(r=>r.json())));
    if (S.event!==want || S.evWt!==wt) return;
    const rows = all.slice().sort((a,b)=>b.date.localeCompare(a.date)).map(x=>{
      const c = CHAMPS[x.eid] || {}; let w = wt, ch = c[wt];
      if (!ch){ const near = Object.keys(c).map(Number).filter(k=>Math.abs(k-wt)<=7).sort((a,b)=>Math.abs(a-wt)-Math.abs(b-wt))[0]; if (near){ w = near; ch = c[near]; } }
      return {x, w, ch}; }).filter(r=>r.ch);
    $('ev-hist').hidden = rows.length < 2;
    if (rows.length < 2) return;
    const tname = tid => (TBY.get(tid)||[]).at(-1)?.name || '';
    $('ev-htitle').textContent = `${wt} · Champions by year`;
    $('ev-hsub').textContent = `${rows.length} of ${all.length} years`;
    $('ev-hbody').innerHTML = rows.map(({x,w,ch})=>{ const [wid, name, tid] = ch, tn = tname(tid) || ch[3] || '';
      return `<tr${x.eid===want?' class="pin"':''}><td style="white-space:nowrap"><a class="lnk plain" href="${hE(x.eid)}">${x.season}</a>${w!==wt?` <span class="sub">at ${w}</span>`:''}</td>
        <td class="who"><div class="whoflex">${tid && tn ? badge(tid, tn) : ''}<div>${hasProfile(wid) ? wlink(wid, name) : esc(name)}${sl([tn])}</div></div></td><td class="lg">${tid && TBY.has(tid) ? tlink(tid, tn) : esc(tn)}</td></tr>`; }).join('');
  }

  /* ---------- wrestler ---------- */
  function renderWrestler(){
    folButton($('w-follow'), 'w', S.wid);
    const msr = (MSBY.get(S.wid) || []).slice().sort((a,b)=>a.season.localeCompare(b.season));
    const rows = (BYID.get(S.wid) || []).slice().sort((a,b)=>a.season.localeCompare(b.season));
    if (!rows.length && msr.length) return renderWrestlerMS(msr);
    if (!rows.length) return;
    document.querySelectorAll('#v-wrestler .grid2 > .card:first-child').forEach(c=>c.hidden=false);
    const last = rows[rows.length-1];
    $('w-name').textContent = last.name;
    $('w-compare').href = `#matchups/w/${S.wid}`; $('w-compare').hidden = false;
    $('w-eyebrow').textContent = `Wrestler · ${last.g==='M'?'Boys':'Girls'} · ${last.wt ?? ''} lbs in ${last.season}`;
    if (!MOVES){ const wid = S.wid; loadMoves().then(()=>{ if (S.wid===wid && MV[wid] && !$('v-wrestler').hidden) renderWrestler(); }); }
    const mv = MV[S.wid], cur = mv && mv.c.length > 1 ? mv.c.at(-1) : null;
    const curTid = cur ? cur[0] : last.tid, curName = cur ? cur[1] : last.team;
    const prev = cur ? [...new Map(mv.c.slice(0,-1).reverse().filter(c=>c[0]!==cur[0]).map(c=>[c[0],c])).values()] : [];
    $('w-sub').innerHTML = `${badge(curTid, curName, 'm')} ${tlink(curTid,curName)}${prev.length?` · previously ${prev.map(c=>tlink(c[0],c[1])).join(', ')}`:''} · in the database ${(msr[0]||rows[0]).season}${(rows.length+msr.length)>1?' to '+last.season:''}${msr.length?` · middle school at ${esc(msr.at(-1).team)}`:''}`;
    $('w-mono').textContent = last.name.split(' ').filter(x=>/^[A-Za-z]/.test(x)).slice(0,2).map(x=>x[0]).join('').toUpperCase();
    { const titles = rows.filter(r=>r.place===1).length, b = [];
      if (titles) b.push(`<span class="badge gold">${titles>1?titles+'× ':''}State champion</span>`);
      if (last.ranked) b.push(`<a class="badge" href="#rankings/HS/${last.season}/${last.g}/${last.wt}/${last.id}">#${last.rank} at ${last.wt} lbs</a>`);
      const p4 = ROWS.filter(r=>r.season===last.season&&r.g===last.g&&r.ranked&&r.pp!=null).sort((a,b)=>b.pp-a.pp).findIndex(r=>r.id===last.id);
      if (p4>=0 && p4<50) b.push(`<a class="badge" href="#p4p/${last.season}/${last.g}/${last.id}">#${p4+1} pound-for-pound</a>`);
      $('w-badges').innerHTML = b.join(''); }
    const withpp = rows.filter(r=>r.pp!=null); const bestpp = withpp.length ? withpp.reduce((a,b)=>b.pp>a.pp?b:a) : null;
    const W = rows.reduce((s,r)=>s+r.w,0), L = rows.reduce((s,r)=>s+r.l,0);
    const titles = rows.filter(r=>r.place===1).length;
    const fin = rows.filter(r=>r.place).map(r=>ord(r.place)).join(' · ') || '–';
    const placed = rows.filter(r=>r.place);
    $('w-tiles').innerHTML = [
      ['P4P Score', fmtS(last.pp), bestpp && bestpp.season===last.season && withpp.length>1 ? `${last.season} · career best` : `${last.season}${bestpp && bestpp.season!==last.season ? ' · best '+fmtS(bestpp.pp)+' in '+bestpp.season : ''}`],
      ['Rating', fmtS(last.r), `likely range ±${last.rd}`],
      ['Career record', `${W}-${L}`, `${pct(W,L)}% · bouts in the database`]
    ].map(([k,v,s])=>`<div class="card tile"><div class="k">${k}</div><div class="v">${esc(v)}</div><div class="s">${esc(s)}</div></div>`).join('')
      + `<div class="card tile"><div class="k">State finishes</div>${placed.length ? `<div class="medals">${placed.map(r=>`<span class="medal ${r.place<=3?'p'+r.place:''}" title="${r.season}: ${r.place===1?'State champion':'State '+ord(r.place)}">${ord(r.place)}</span>`).join('')}</div><div class="s" style="margin-top:6px">${placed.map(r=>'20'+r.season.slice(5)).join(', ')}</div>` : '<div class="v">–</div><div class="s">No state placement in the database</div>'}</div>`;
    $('w-body').innerHTML = rows.slice().reverse().map(r=>{ const sw = mv && mv.s[r.season];
      return `<tr><td style="white-space:nowrap">${r.season}${yrChip(r.gr)}<div class="subline">${sw ? schoolSeq(sw) : tlink(r.tid,r.team)}</div></td><td class="num">${r.wt??'–'}</td>
      <td class="num">${r.w}-${r.l}</td><td class="num lg"><strong>${r.r}</strong></td><td class="num lg">${r.ranked?'#'+r.rank:dash}</td>
      <td class="num">${r.pp??'–'}</td><td>${placeChip(r.place)}</td></tr>`; }).join('') + msRowsHtml(msr);
    drawChart(rows);
    renderSOS(rows);
    wTabs(true);
    matchSeasons(rows, msr);
    renderMatches();
  }
  function msRowsHtml(msr){
    return msr.slice().reverse().map(r=>`<tr><td style="white-space:nowrap">${r.season} <span class="chip">MS</span>${yrChip(r.gr)}<div class="subline">${mtlink(r.tid,r.team)}</div></td><td class="num">${r.wt??'–'}</td>
      <td class="num">${r.w}-${r.l}</td><td class="num lg"><strong>${r.r}</strong></td><td class="num lg">${r.ranked?'#'+r.rank:dash}</td><td class="num">${dash}</td><td>${dash}</td></tr>`).join('');
  }
  function matchSeasons(rows, msr){
    const opts = rows.map(r=>[r.season, r.season]).concat(msr.map(r=>['MS:'+r.season, r.season+' (middle school)'])).sort((a,b)=>b[0].replace('MS:','').localeCompare(a[0].replace('MS:','')) || (a[0].startsWith('MS:')?1:-1));
    if (!opts.some(o=>o[0]===S.mSeason)) S.mSeason = opts[0][0];
    $('w-mseason').innerHTML = opts.map(([v,l])=>`<option value="${v}" ${v===S.mSeason?'selected':''}>${esc(l)}</option>`).join('');
    renderMatches();
  }
  function renderWrestlerMS(msr){
    const last = msr.at(-1);
    $('w-name').textContent = last.name;
    $('w-compare').hidden = true;
    $('w-eyebrow').textContent = `Middle school wrestler · ${last.g==='M'?'Boys':'Girls'} · ${last.wt ?? ''} lbs in ${last.season}`;
    $('w-sub').innerHTML = `${badge(last.tid, last.team, 'm')} ${mtlink(last.tid,last.team)} · in the database ${msr[0].season}${msr.length>1?' to '+last.season:''}`;
    $('w-mono').textContent = last.name.split(' ').filter(x=>/^[A-Za-z]/.test(x)).slice(0,2).map(x=>x[0]).join('').toUpperCase();
    $('w-badges').innerHTML = (last.ranked ? `<a class="badge" href="#rankings/MS/${last.season}/${last.g}/${last.wt}/${last.id}">#${last.rank} at ${last.wt} lbs (middle school)</a>` : '');
    const W = msr.reduce((s,r)=>s+r.w,0), L = msr.reduce((s,r)=>s+r.l,0);
    const peak = Math.max(...msr.map(r=>r.peak));
    $('w-tiles').innerHTML = [['Rating', fmtS(last.r), `${last.season} · likely range ±${last.rd}`], ['Peak rating', fmtS(peak), 'middle school'],
      ['Record', `${W}-${L}`, `${pct(W,L)}% · bouts in the database`], ['Level', 'Middle school', 'P4P Score starts in high school']]
      .map(([k,v,s])=>`<div class="card tile"><div class="k">${k}</div><div class="v${String(v).length>8?' small':''}">${esc(v)}</div><div class="s">${esc(s)}</div></div>`).join('');
    $('w-body').innerHTML = msRowsHtml(msr);
    document.querySelectorAll('#v-wrestler .grid2 > .card:first-child').forEach(c=>c.hidden=true);
    $('w-sosbar').innerHTML = ''; wTabs(false);
    matchSeasons([], msr);
  }
  async function renderMatches(){
    $('w-matches').innerHTML = '<p class="loading">Loading matches…</p>';
    if (oldSeason(String(S.mSeason).replace(/^MS:/,''))){ fullReady.then(()=>{ if (!$('v-wrestler').hidden) renderMatches(); }); return; }
    const want = S.mSeason, wid = S.wid; const isMS = String(want).startsWith('MS:');
    const d = await loadSeason(isMS ? want.slice(3) : want, isMS ? 'MS' : 'HS'); if (want!==S.mSeason || wid!==S.wid) return;
    const bouts = d.byW.get(wid) || [];
    const byE = new Map(); for (const b of bouts) (byE.get(b[0])||byE.set(b[0],[]).get(b[0])).push(b);
    const evs = [...byE.keys()].map(e=>EVBY.get(e)).filter(Boolean).sort((a,b)=>b.date.localeCompare(a.date));
    const N = id => d.names[id] || '?', T = id => d.teams[id] || '';
    await loadMoves(); if (want!==S.mSeason || wid!==S.wid) return;
    const sw = !isMS && MV[wid] && MV[wid].s[want];
    const note = sw ? `<p class="note movenote">Changed schools this season: ${sw.map((g,i)=>`${tlink(g[0],g[1])} (${g[2]} bouts, ${i===0?'through '+fmtMD(g[4]):'from '+fmtMD(g[3])})`).join(' <span aria-hidden="true">→</span><span class="sr">then</span> ')}. Each event shows the school wrestled for.</p>` : '';
    const season = isMS ? want.slice(3) : want;
    const mhead = evs.length ? '<div class="match mhead lg" aria-hidden="true"><span>W/L</span><span>Opponent</span><span>Round</span><span class="num">Weight</span><span>Opponent\'s final rank</span><span class="res">Result</span></div>' : '';
    $('w-matches').innerHTML = note + mhead + evs.map(e=>{ const bs = byE.get(e.eid); const w = bs.filter(b=>b[3]===wid).length;
      const own = sw ? T(bs[0][3]===wid ? bs[0][5] : bs[0][6]) : '';
      return `<div class="group-h"><span>${elink(e.eid,e.name)}</span><span class="sub">${fmtShort(e.date)} · ${evTag(e)} · ${w}-${bs.length-w}</span></div>${own ? `<div class="forschool">For ${esc(own)}</div>` : ''}
      ${(() => { const r = bs.slice().reverse(), st = r.map(b=>rdStage(d.rounds[b[2]]));     // latest round first when every round is one we can place
          return st.every(x=>x!=null) ? r.map((b,i)=>[b,st[i],i]).sort((a,b)=>b[1]-a[1] || a[2]-b[2]).map(x=>x[0]) : r; })().map(b=>{ const won=b[3]===wid; const o=won?b[4]:b[3], ot=won?b[6]:b[5];
        const rd = esc(rdName(d.rounds[b[2]]||'')), orow = (isMS ? MSBY : BYID).get(o)?.find(x=>x.season===season);
        const ork = orow && orow.ranked ? `<span class="chip">#${orow.rank} at ${orow.wt}</span>` : '';
        return `<div class="match"><span class="wl ${won?'W':'L'}" aria-hidden="true">${won?'W':'L'}</span><span class="sr">${won?'Won':'Lost'} against</span>
        <div class="whoflex">${badge(ot, T(ot), 's')}<div>${wlink(o,N(o))}<div class="meta">${esc(T(ot))}${rd?`<span class="mrd">${T(ot)?' · ':''}${rd}</span>`:''}${ork?`<span class="mrd"> · ${ork}</span>`:''}</div></div></div>
        <div class="lg mcell">${rd || dash}</div><div class="lg mcell num">${b[1] ? b[1]+' lbs' : dash}</div><div class="lg mcell">${ork ? ork + '<span class="sr"> final ranking</span>' : dash}</div>
        <div class="res">${score(d.rt[b[7]], b[8])}</div></div>`; }).join('')}`; }).join('')
      || '<p class="loading">No matches in the database this season.</p>';
  }

  /* strength of schedule (sos.py): {wid: {s: {season: [avg, pctl, n, topW, topL, sqW, sqL, plW, plL]}, t: [[opp, season, eid, rt, score, wins]...]}} in x/<wid % 50>.json */
  const SOSX = {}; const loadSOS = wid => SOSX[wid % 50] ||= fetch(`x/${wid % 50}.json`).then(r=>r.ok?r.json():{}).catch(()=>({}));
  function wTabs(hs){
    const sch = hs && S.wView==='schedule';
    seg($('w-mviews'), hs ? [['matches','Matches'],['schedule','Strength of schedule']] : [['matches','Matches']], sch ? 'schedule' : 'matches', v=>{
      S.wView=v; history.replaceState(null,'', v==='schedule' ? `#wrestler/${S.wid}/schedule` : `#wrestler/${S.wid}`); wTabs(true); });
    $('w-matches').hidden = sch; $('w-mseason').hidden = sch; $('w-sos').hidden = !sch;
  }
  async function renderSOS(rows){
    const wid = S.wid, bar = $('w-sosbar'), box = $('w-sosbody');
    bar.innerHTML = ''; box.innerHTML = '<p class="loading">Working out schedule strength…</p>';
    const all = await loadSOS(wid); if (wid !== S.wid) return;
    const x = all[wid], lines = rows.map(r=>({r, v: x && x.s[r.season]}));
    if (!lines.some(l=>l.v)){ box.innerHTML = '<p class="loading">No matches against rated Ohio high school opponents in the database yet.</p>'; return; }
    const T = [0,0,0,0,0,0]; for (const {v} of lines) if (v) for (let i=0;i<6;i++) T[i] += v[3+i];
    const wl = (a, i) => `${a[i]}-${a[i+1]}`, latest = lines.filter(l=>l.v && l.v[1]!=null).at(-1);
    const go = `<a class="lnk go" href="#wrestler/${wid}/schedule">Strength of schedule <span aria-hidden="true">→</span></a>`;
    bar.innerHTML = `<div class="card sbar"><div class="lead">Schedule</div>${latest ? `<div class="it"><b>Top ${Math.max(1,100-latest.v[1])}%</b><span>schedule in Ohio, ${latest.r.season}</span></div>` : ''}
      <div class="it"><b>${wl(T,0)}</b><span>vs top 20</span></div><div class="it"><b>${wl(T,2)}</b><span>vs state qualifiers</span></div><div class="it"><b>${wl(T,4)}</b><span>vs state placers</span></div>${go}</div>`;
    if (!bar.dataset.wired){ bar.dataset.wired = 1; bar.addEventListener('click', e=>{ if (e.target.closest('.go')) setTimeout(()=>$('w-mcard').scrollIntoView({block:'start', behavior:'smooth'}), 250); }); }
    const tbl = `<table><thead><tr><th>Season</th><th class="num lg">Avg opp.</th><th>Tougher than</th><th class="num">Top 20</th><th class="num">Qualifiers</th><th class="num">Placers</th></tr></thead><tbody>
      ${lines.slice().reverse().map(({r,v})=>`<tr><td>${r.season}<div class="subline">${r.wt??''} lbs<span class="opp-n">${v ? ` · ${v[2]} rated opponents` : ''}</span></div></td><td class="num lg">${v ? fmtS(v[0]) : dash}</td>
        <td>${v && v[1]!=null ? `${v[1]}%<span class="mbar" aria-hidden="true"><i style="width:${v[1]}%"></i></span>` : dash}</td>
        <td class="num">${v ? wl(v,3) : dash}</td><td class="num">${v ? wl(v,5) : dash}</td><td class="num">${v ? wl(v,7) : dash}</td></tr>`).join('')}
      ${lines.length>1 ? `<tr class="tot"><td>Career</td><td class="num lg"></td><td></td><td class="num">${wl(T,0)}</td><td class="num">${wl(T,2)}</td><td class="num">${wl(T,4)}</td></tr>` : ''}</tbody></table>`;
    const tw = (x.t || []).map(([op, season, eid, rt, sc, n])=>{ const o = (BYID.get(op)||[]).find(z=>z.season===season); if (!o) return ''; const e = EVBY.get(eid);
      const their = [o.ranked ? `#${o.rank} at ${o.wt}` : '', placeText(o.place) || (o.sq ? 'State qualifier' : ''), o.pp!=null ? `P4P ${fmtS(o.pp)}` : ''].filter(Boolean).join(' · ');
      return `<div class="twin"><div>${wlink(o.id, o.name)} <span class="sub">${esc(o.team)}</span><div class="meta">${season}: ${esc(their)}${n>1 ? ` · ${n} wins over them` : ''}</div><div class="meta">${e ? elink(e.eid, e.name)+' · '+fmtShort(e.date) : ''}</div></div>
        <div class="res">${score(rt, sc)}</div></div>`; }).join('') || '<p class="note" style="padding:0 20px 16px">No wins over rated opponents yet.</p>';
    box.innerHTML = `<div class="sos-grid"><div><h3>By season</h3><div class="tw">${tbl}</div></div><div><h3>Toughest wins</h3>${tw}</div></div>`;
  }
  function drawChart(rows){
    rows = rows.filter(r=>r.pp!=null);
    const box = $('w-chart');
    if (!rows.length){ box.innerHTML='<p class="note">No P4P Score yet for this wrestler.</p>'; return; }
    const W = Math.max(300, Math.min(620, (box.clientWidth || 560) - 24)), H = W < 420 ? 220 : 250;
    const L=44, R=14, T=26, B=34, PAD = rows.length>1 ? 28 : 0;
    const vals = rows.map(r=>r.pp).concat([500,1000]);
    const lo = Math.floor((Math.min(...vals)-50)/100)*100, hi = Math.ceil((Math.max(...vals)+50)/100)*100;
    const n = rows.length, x = i => n===1 ? (L+W-R)/2 : L+PAD + i*(W-L-R-2*PAD)/(n-1), y = v => T + (hi-v)*(H-T-B)/(hi-lo);
    const css = getComputedStyle(document.documentElement), ink=css.getPropertyValue('--ink'), mut=css.getPropertyValue('--muted'), line=css.getPropertyValue('--line'), acc=css.getPropertyValue('--accent');
    const step = (hi-lo) > 800 ? 200 : 100;
    let g=''; for (let v=lo; v<=hi; v+=step) g += `<line x1="${L}" x2="${W-R}" y1="${y(v)}" y2="${y(v)}" stroke="${line}"/><text x="${L-6}" y="${y(v)+4}" text-anchor="end" font-size="11" fill="${mut}">${v}</text>`;
    const ref = [500,1000].map(v=>`<line x1="${L}" x2="${W-R}" y1="${y(v)}" y2="${y(v)}" stroke="${mut}" stroke-dasharray="4 4" opacity="0.7"/><text x="${W-R}" y="${y(v)-5}" text-anchor="end" font-size="10" fill="${mut}">${v===500?'typical qualifier':'typical champion'}</text>`).join('');
    const pts = rows.map((r,i)=>`${x(i)},${y(r.pp)}`).join(' ');
    const area = `${x(0)},${y(lo)} ${pts} ${x(n-1)},${y(lo)}`;
    const marks = rows.map((r,i)=>`<circle cx="${x(i)}" cy="${y(r.pp)}" r="${i===n-1?6:4.5}" fill="${acc}"/>
      <text x="${x(i)}" y="${y(r.pp)-11}" text-anchor="middle" font-size="12" font-weight="700" fill="${ink}">${r.pp}</text>
      <text x="${x(i)}" y="${H-18}" text-anchor="middle" font-size="11" fill="${mut}">${r.season}</text>
      <text x="${x(i)}" y="${H-5}" text-anchor="middle" font-size="10" fill="${mut}">${r.wt?r.wt+' lbs':''}</text>`).join('');
    box.innerHTML = `<svg viewBox="0 0 ${W} ${H}" role="img" aria-label="P4P Score by season: ${rows.map(r=>r.season+' '+r.pp).join(', ')}">${g}${ref}<polygon points="${area}" fill="${acc}" opacity="0.08"/><polyline points="${pts}" fill="none" stroke="${acc}" stroke-width="2.5"/>${marks}</svg>`;
  }

  /* ---------- finding things: one set of rules for the search page, the search boxes and the pickers ----------
     Text is compared in lower case without punctuation. Every word typed must start a word of the thing searched
     ("john smi" finds John Smith and Smith, John; "green" finds Green and Bowling Green, not Evergreen).
     "High School", "HS", "Middle School" and the like are ignored when other words are typed, so "Green High School"
     is a search for Green. A school is found by its name, its full name, its nickname or its town; an event by its
     name, where it was held (building and town) and the school that hosted it.
     Best first: the whole phrase typed appears as written (3), then every word matches a whole word (2), then starts of words (1). */
  const sNorm = x => String(x ?? '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,'').replace(/['’.]/g,'').replace(/[^a-z0-9]+/g,' ').trim()
    .replace(/\bmt\b/g,'mount').replace(/\bst\b/g,'saint').replace(/\bft\b/g,'fort');     // Mt. Vernon = Mount Vernon, St. Edward = Saint Edward
  const S_STOP = /\b(senior high school|junior high school|high school|middle school|senior high|junior high|school|hs|ms|jh|jr high)\b/g;
  const sQuery = q => { const full = sNorm(q), core = full.replace(S_STOP,' ').replace(/\s+/g,' ').trim() || full;
    return {full, core, words: core.split(' '), school: core !== full, ms: /\b(middle school|junior high|jr high|ms|jh)\b/.test(full)}; };       // school: the search names a kind of school ("Green High School")
  // a search for a school rather than a person: it says so, or it is exactly a school's name
  const sSchool = Q => Q.school || sTeams().some(x => x.nm === Q.core);
  const sHit = (Q, key) => { const k = ' ' + key + ' '; let whole = true;
    for (const w of Q.words){ if (!k.includes(' ' + w)) return 0; if (!k.includes(' ' + w + ' ')) whole = false; }
    return Q.full.length > 2 && k.includes(' ' + Q.full + ' ') ? 3 : whole ? 2 : 1; };
  const sKey = r => r._k ??= sNorm(r.name + ' ' + r.team);
  function findW(q, limit){
    const Q = sQuery(q); if (Q.full.length < 3) return [];
    const seen = new Map();
    for (const r of ROWS) if (sHit(Q, sKey(r))){ const c=seen.get(r.id); if(!c||r.season>c.season) seen.set(r.id,r); }
    for (const r of MSROWS) if (!BYID.has(r.id) && sHit(Q, sKey(r))){ const c=seen.get(r.id); if(!c||r.season>c.season) seen.set(r.id,{...r, ms:true}); }
    // a search for a school lists that school's wrestlers first; otherwise a wrestler found by his own name comes
    // before one found only through his school
    const sch = sSchool(Q), own = r => sch ? ((r._t ??= sNorm(r.team)) === Q.core ? 2 : sHit(Q, r._t) ? 1 : 0) : sHit(Q, r._n ??= sNorm(r.name)) ? 1 : 0;
    return [...seen.values()].sort((a,b)=>own(b)-own(a) || b.season.localeCompare(a.season) || (b.pp??-9e9)-(a.pp??-9e9)).slice(0,limit);
  }
  // schools: latest season row per team, with the school's full name, nickname and town once schools.json is in
  let S_SCH = null, S_TEAMS = null, S_EVK = false;
  let S_AL = null;
  const sReady = () => Promise.all([loadSchools().then(x=>{ if (!S_SCH){ S_SCH = x; S_TEAMS = null; S_EVK = false; } }), loadPlaces().then(()=>{ S_EVK = false; }),
    S_AL ? null : fetch('talias.json').then(r=>r.ok?r.json():{}).catch(()=>({})).then(a=>{ S_AL = a; S_TEAMS = null; })]);
  function sTeams(){
    if (S_TEAMS) return S_TEAMS;
    const last = new Map(); for (const t of TEAMS){ const c = last.get(t.tid); if (!c || t.season > c.season) last.set(t.tid, t); }
    // middle school teams with no high school team of the same id (Learwood, Dempsey) are found too
    const msOnly = []; for (const [tid, rs] of MST){ if (last.has(tid)) continue; const r = rs.reduce((a,b)=>b.season > a.season ? b : a); msOnly.push({...r, ms:true, div:null}); }
    return S_TEAMS = [...last.values()].concat(msOnly).map(t => { const si = S_SCH && S_SCH[t.tid];
      return {t, nm: sNorm(t.name), key: sNorm([t.name, t.ms ? 'middle school' : '', si && si[6], si && si[0], si && si[4], ...((S_AL && S_AL[t.tid]) || [])].filter(Boolean).join(' '))}; });
  }
  function findT(q){
    const Q = sQuery(q); if (Q.full.length < 3) return [];
    // the school's own short name first, then its full name as typed, then other names holding the words, then nickname or town
    return sTeams().map(x => { const hk = sHit(Q, x.key); if (!hk) return null; const hn = sHit(Q, x.nm);
        const ms = Q.ms && !x.t.ms && MST.has(x.t.tid) ? MST.get(x.t.tid).reduce((a,b)=>b.season > a.season ? b : a) : null;      // asked for the middle school
        return [x.nm === Q.core ? 5 : hk === 3 && Q.full.includes(' ') ? 4 : hn ? hn + 1 : 1, ms ? {...ms, ms:true, div:null} : x.t]; }).filter(Boolean)
      .filter((x, i, a) => x[0] > 1 || !a.some(y => y[0] === 5))      // the school itself was found: leave out schools matched only by nickname or town
      .sort((a,b) => b[0]-a[0] || (a[1].st && a[1].st!=='OH' ? 1 : 0)-(b[1].st && b[1].st!=='OH' ? 1 : 0) || b[1].season.localeCompare(a[1].season) || a[1].name.localeCompare(b[1].name)).map(x=>x[1]);
  }
  // events: name, building, town and county, host school (short and full name)
  const sEvKey = e => { if (!S_EVK){ for (const x of EVENTS) x._k = null; S_EVK = true; }
    if (e._k == null){ const t = townOf(e), h = e.host != null ? (TBY.get(e.host)||[]).at(-1) : null, si = h && S_SCH && S_SCH[e.host];
      e._k = sNorm([evName(e.name), e.venue, t && t[0], t && t[1] ? t[1] + ' county' : '', h && h.name, si && si[6]].filter(Boolean).join(' '));
      e._h = h ? sNorm(h.name) : ''; }
    return e._k; };
  // best first: held at the school searched for (4), the phrase as typed (3), whole words (2), starts of words (1); newest first within each.
  // strict (the Events page filter): only the best kind found, so "Green High School" lists the events held there and nothing else
  function findE(q, list, strict){
    const Q = sQuery(q); if (Q.full.length < 3) return [];
    let r = (list || EVENTS).map(e => { const h = sHit(Q, sEvKey(e)); return [h && e._h === Q.core ? 4 : h, e]; }).filter(x=>x[0]);
    if (strict){ const top = Math.max(0, ...r.map(x=>x[0])); r = r.filter(x => x[0] >= Math.min(top, top >= 3 ? 3 : 2)); }
    return r.sort((a,b) => b[0]-a[0] || b[1].date.localeCompare(a[1].date)).map(x=>x[1]);
  }
  // events on wrestle.live that have not finished, once that list is in (wlUp is filled by loadWLUp)
  let WLUP_NOW = [];
  const findU = q => { const Q = sQuery(q); if (Q.full.length < 3) return [];
    return WLUP_NOW.filter(u => u.st !== 'final' && sHit(Q, u._k ??= sNorm([u.name, u.where, u.host].join(' ')))); };
  function picker(inp, box, key){
    inp.setAttribute('aria-controls', box.id);
    inp.onkeydown = e => { if (e.key==='Escape'){ box.hidden = true; } };
    inp.oninput = () => { if (!FULL && inp.value.trim().length >= 3){ box.hidden = false; box.innerHTML = '<p class="sub" style="padding:8px 12px">Loading every season…</p>'; fullReady.then(()=>{ if (document.activeElement === inp) inp.oninput(); }); return; }
      const list = findW(inp.value, 10); box.hidden = !list.length;
      box.innerHTML = list.map(r=>`<button type="button" data-pick="${r.id}"><span><strong>${esc(r.name)}</strong> <span class="sub">${esc(r.team)}</span></span><span class="sub">${r.ms?'MS · ':''}${r.season} · ${r.wt??''}</span></button>`).join(''); };
    box.onclick = e => { const b=e.target.closest('[data-pick]'); if(!b) return; S[key]=+b.dataset.pick; box.hidden=true; inp.value=''; history.replaceState(null,'',`#matchups/w/${S.ca??''}/${S.cb??''}`); renderCompare(); };
  }
  async function renderCompare(){
    const rowsOf = id => BYID.get(id) || MSBY.get(id);          // middle-school-only wrestlers can be compared too
    const A = rowsOf(S.ca), Bv = rowsOf(S.cb);
    $('c-a').placeholder = A ? A[A.length-1].name : 'Name or school';
    $('c-b').placeholder = Bv ? Bv[Bv.length-1].name : 'Name or school';
    if (!A || !Bv){ $('c-out').innerHTML = '<p class="note">Pick two wrestlers to compare.</p>'; return; }
    const a = A.slice().sort((x,y)=>x.season.localeCompare(y.season)).at(-1), b = Bv.slice().sort((x,y)=>x.season.localeCompare(y.season)).at(-1);
    const sc = META.scale || 1.3, Q = 173.7178;
    const phi = Math.hypot(a.rd, b.rd)/Q, gg = 1/Math.sqrt(1+3*phi*phi/(Math.PI**2));
    const p = 1/(1+Math.exp(-gg*sc*(a.r-b.r)/Q)), pa = Math.round(100*p);
    const same = a.season===b.season;
    const cmp = (x,y,hi=true) => x==null||y==null||x===y ? 0 : ((x>y)===hi ? 1 : 2);
    const row = (label, va, vb, better) => `<tr><td class="num ${better===1?'hl':''}">${va}</td><td style="text-align:center" class="sub">${label}</td><td class="${better===2?'hl':''}">${vb}</td></tr>`;
    const aw = A.reduce((s,r)=>s+r.w,0), al = A.reduce((s,r)=>s+r.l,0), bw = Bv.reduce((s,r)=>s+r.w,0), bl = Bv.reduce((s,r)=>s+r.l,0);
    const at = A.filter(r=>r.place===1).length, bt = Bv.filter(r=>r.place===1).length;
    const bestA = Math.max(...A.map(r=>r.pp??-9e9)), bestB = Math.max(...Bv.map(r=>r.pp??-9e9));
    const showBest = v => v > -9e9 ? v : '–', lvl = r => BYID.has(r.id) ? '' : ' · middle school';
    const ln = s => esc(s.split(' ').at(-1));
    $('c-out').innerHTML = `<div class="card" style="margin-top:16px;padding:16px">
      <div style="display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap">
        <div class="vside">${badge(a.tid, a.team, 'xl')}<div><div class="vsname a">${wlink(a.id,a.name)}</div><div class="sub">${esc(a.team)}${a.wt ? ' · '+a.wt+' lbs' : ''} · ${a.season}${lvl(a)}</div></div></div>
        <div class="vside r"><div style="text-align:right"><div class="vsname b">${wlink(b.id,b.name)}</div><div class="sub">${esc(b.team)}${b.wt ? ' · '+b.wt+' lbs' : ''} · ${b.season}${lvl(b)}</div></div>${badge(b.tid, b.team, 'xl')}</div>
      </div>
      <div style="display:flex;justify-content:space-between;margin-top:14px;font-weight:700"><span style="color:var(--blue)" id="c-pa">${pa}%</span><span class="sub" style="font-weight:600;font-size:13px">Win probability${same?'':' (latest ratings, different seasons)'}</span><span style="color:var(--orange)" id="c-pb">${100-pa}%</span></div>
      <div class="prob" id="c-bar" role="img" aria-label="Win probability ${pa} to ${100-pa}"><div style="width:${100*p}%;background:var(--blue)"></div><div style="width:${100-100*p}%;background:var(--orange)"></div></div>
      <p class="sub" id="c-met" style="margin:10px 0 0;font-size:14px" hidden></p></div>
      <div class="grid2" style="margin-top:16px"><div class="card"><div class="card-head"><h2>Side by side</h2></div><table><thead><tr><th class="num">${esc(a.name)}</th><th style="text-align:center"><span class="sr">Measure</span></th><th>${esc(b.name)}</th></tr></thead><tbody>
      ${row('Latest rating', `${a.r} <span class="sub">±${a.rd}</span>`, `${b.r} <span class="sub">±${b.rd}</span>`, same?cmp(a.r,b.r):0)}
      ${row('P4P Score', a.pp??'–', b.pp??'–', cmp(a.pp,b.pp))}
      ${row('Best P4P Score', showBest(bestA), showBest(bestB), bestA>-9e9&&bestB>-9e9 ? cmp(bestA,bestB) : 0)}
      ${row('Career record', `${aw}-${al}`, `${bw}-${bl}`, cmp(aw/(aw+al||1), bw/(bw+bl||1)))}
      ${row('State titles', at, bt, cmp(at,bt))}
      ${row('State finishes', A.filter(r=>r.place).map(r=>ord(r.place)).join(' ')||'–', Bv.filter(r=>r.place).map(r=>ord(r.place)).join(' ')||'–', 0)}
      </tbody></table></div>
      <div class="stack"><div class="card"><div class="card-head"><h2>Past meetings</h2><span class="sub" id="c-mt"></span></div><div id="c-meet"><p class="loading">Searching every season…</p></div></div>
      <div class="card"><div class="card-head"><h2>Common opponents</h2><span class="sub" id="c-cot"></span></div><div id="c-common"><p class="loading">Searching…</p></div></div></div></div>`;
    const ida = S.ca, idb = S.cb;
    const keys = new Set();   // every season either wrestler has, high school and middle school
    for (const id of [ida, idb]){ for (const r of BYID.get(id)||[]) keys.add('HS|'+r.season); for (const r of MSBY.get(id)||[]) keys.add('MS|'+r.season); }
    const ds = await Promise.all([...keys].sort().map(k=>loadSeason(k.slice(3), k.slice(0,2))));
    if (ida!==S.ca || idb!==S.cb) return;
    const meet = [], resA = new Map(), resB = new Map();
    ds.forEach(d => {
      for (const x of (d.byW.get(ida)||[])){ const won = x[3]===ida, o = won?x[4]:x[3];
        if (o===idb) meet.push([x, won, d]); else (resA.get(o)||resA.set(o,{name:d.names[o],r:[]}).get(o)).r.push([won, x, d]); }
      for (const x of (d.byW.get(idb)||[])){ const won = x[3]===idb, o = won?x[4]:x[3]; if (o!==ida) (resB.get(o)||resB.set(o,{name:d.names[o],r:[]}).get(o)).r.push([won, x, d]); }
    });
    const aWins = meet.filter(m=>m[1]).length;
    // They've met before: wrestlers who have already met this season repeat the result a little more often than their
    // ratings alone say (in our results, each win in hand this season is worth about 0.29 on the log-odds scale).
    { const cur = same ? meet.filter(m=>EVBY.get(m[0][0])?.season === a.season && !['ff','mff','bye'].includes(m[2].rt[m[0][7]])) : [];
      const net = cur.filter(m=>m[1]).length - cur.filter(m=>!m[1]).length;
      if (cur.length && $('c-met')){ const p2 = 1/(1+Math.exp(-(Math.log(p/(1-p)) + 0.29*net))), pa2 = Math.round(100*p2), aw = cur.filter(m=>m[1]).length;
        $('c-pa').textContent = pa2 + '%'; $('c-pb').textContent = (100-pa2) + '%';
        $('c-bar').setAttribute('aria-label', `Win probability ${pa2} to ${100-pa2}`); $('c-bar').children[0].style.width = 100*p2 + '%'; $('c-bar').children[1].style.width = (100-100*p2) + '%';
        $('c-met').hidden = false;
        $('c-met').textContent = `They have met ${cur.length === 1 ? 'once' : cur.length + ' times'} this season (${ln(a.name)} ${aw}, ${ln(b.name)} ${cur.length-aw}). ` + (net ? `Ratings alone say ${pa}–${100-pa}; wrestlers who have already met tend to repeat the result, so the odds lean a little further toward the one ahead.` : 'The meetings are even, so the odds stay with the ratings.'); } }
    { const bWins = meet.length - aWins, la = a.name.split(' ').at(-1), lb = b.name.split(' ').at(-1);
      $('c-mt').textContent = !meet.length ? '' : aWins > bWins ? `${la} leads ${aWins}-${bWins}` : bWins > aWins ? `${lb} leads ${bWins}-${aWins}` : `Tied ${aWins}-${bWins}`; }
    $('c-meet').innerHTML = meet.length ? meet.reverse().map(([x,won,d])=>{ const e=EVBY.get(x[0]);
      return `<div class="match"><span class="wl ${won?'W':'L'}" aria-hidden="true">${won?'A':'B'}</span><span class="sr">${won?a.name:b.name} won</span><div>${e?elink(e.eid,e.name):''}<div class="meta">${fmtDate(e?.date)} · ${esc(d.rounds[x[2]]||'')}</div></div><div class="res">${score(d.rt[x[7]], x[8])}</div></div>`; }).join('')
      : '<p class="loading">No meetings between these two in the database.</p>';
    const common = [...resA.keys()].filter(k=>resB.has(k));
    const res = rs => rs.map(([won,x,d])=>`<span class="${won?'up':'down'}">${won?'W':'L'}</span> ${score(d.rt[x[7]], x[8])}`).join(', ');
    const tally = m => { let w=0,l=0; for (const k of common) for (const [won] of m.get(k).r) won?w++:l++; return w+'-'+l; };
    $('c-cot').textContent = common.length ? `${a.name.split(' ').at(-1)} ${tally(resA)} · ${b.name.split(' ').at(-1)} ${tally(resB)}` : '';
    $('c-common').innerHTML = common.length ? `<table><thead><tr><th>Opponent and results</th></tr></thead><tbody>${common.slice(0,25).map(k=>`<tr><td class="who">${wlink(k,resA.get(k).name)}<div class="meta sub" style="font-size:13px">${ln(a.name)}: ${res(resA.get(k).r)}<br>${ln(b.name)}: ${res(resB.get(k).r)}</div></td></tr>`).join('')}</tbody></table>`
      : '<p class="loading">No common opponents in the loaded seasons.</p>';
  }

  /* ---------- search ---------- */
  function renderSearch(){
    const q = $('s-q').value.trim();
    if (sQuery(q).full.length < 3){ $('s-out').innerHTML = `<p class="sub">Type at least 3 letters: a wrestler, a school (by name, nickname or town) or an event (by name, host school or town). Wrestlers include ranked wrestlers and state qualifiers from ${META.seasons[0]} to ${META.seasons.at(-1)}; schools and wrestlers from outside Ohio are listed in their own group.</p>`; return; }
    if (!FULL){ $('s-out').innerHTML = FULLFAIL ? '<p class="note">Earlier seasons did not load, so search is not available. Reload the page to try again.</p>' : '<p class="loading">Loading every season…</p>'; fullReady.then(()=>{ if (!$('v-search').hidden) renderSearch(); }); return; }
    if (!S_SCH || !PLACES || !S_AL) sReady().then(()=>{ if (!$('v-search').hidden && $('s-q').value.trim() === q) renderSearch(); });
    loadWLUp().then(U=>{ if (WLUP_NOW !== U){ WLUP_NOW = U; if (U.length && !$('v-search').hidden && $('s-q').value.trim() === q) renderSearch(); } });
    if (S.sMoreQ !== q){ S.sMoreQ = q; S.sMore = {w:15, t:10, e:15, y:0}; }                       // "Show more" grows one list; a new search starts over
    const M = S.sMore, wall = findW(q, 2000), wIn = wall.filter(r=>!away(r)), ws = wIn.slice(0,M.w), wo = wall.filter(away).slice(0,10);
    const tall = findT(q), tIn = tall.filter(t=>!away(t)), ts = tIn.slice(0,M.t), to = tall.filter(away).slice(0,10);
    const us = findU(q), eall = findE(q), es = eall.slice(0,M.e);
    const more = (k, shown, all) => all > shown ? `<p style="margin:0;padding:10px 16px"><button type="button" class="btn ghost" data-more="${k}">Show more (${shown} of ${all})</button></p>` : '';
    const lostNote = S.lost && S.lost.named && sNorm(S.lost.named) === sNorm(q) ? `<p class="note" style="margin:0 0 14px">That ${S.lost.kind} page is no longer at its old address. Here is everything we have for “${esc(S.lost.named)}”.</p>` : '';
    $('live').textContent = `${ws.length} wrestlers, ${ts.length} teams, ${es.length + us.length} events found` + (wo.length+to.length ? `, ${wo.length+to.length} outside Ohio` : '');
    const block = (title, body) => `<div class="card"><div class="card-head"><h2>${title}</h2></div>${body}</div>`;
    const where = e => { const t = townOf(e); return t ? esc(t[0]) + ' · ' : ''; };
    // teams and events first when the search reads as a school or a place rather than a person
    const W = block(`Wrestlers (${wIn.length > ws.length ? ws.length + ' of ' + wIn.length : ws.length})`, ws.length ? `<div class="results">${ws.map(r=>`<a href="${hW(r.id)}"><span class="whoflex">${badge(r.tid, r.team, 's')}<span><strong>${esc(r.name)}</strong> <span class="sub">${esc(r.team)}</span></span></span><span class="sub">${r.season} · ${r.wt??''}</span></a>`).join('')}</div>${more('w', ws.length, wIn.length)}` : '<p class="loading">No wrestlers match.</p>');
    const T = block(`Teams (${tIn.length > ts.length ? ts.length + ' of ' + tIn.length : ts.length})`, ts.length ? `<div class="results">${ts.map(t=>`<a href="${t.ms ? hMT(t.tid) : hT(t.tid)}"><span class="whoflex">${badge(t.tid, t.name, 's')}<strong>${esc(t.name)}</strong></span><span class="sub">${t.ms ? 'Middle school · ' : t.div?'D-'+t.div+' · ':''}${t.season}</span></a>`).join('')}</div>${more('t', ts.length, tIn.length)}` : '<p class="loading">No teams match.</p>');
    const E = block(`Events (${eall.length + us.length > 15 ? 'first ' + (es.length + us.length) + ' of ' + (eall.length + us.length) : es.length + us.length})`, es.length + us.length ? `<div class="results">`
        + us.map(u=>`<a href="${hPV(u)}"><span><strong>${esc(u.name)}</strong> <span class="wl-chip${u.st==='live'?' live':''}">${u.st==='live'?'Live now':'Coming up'}</span></span><span class="sub">${wlDates(u)}${u.where ? ' · ' + esc(u.where) : ''}</span></a>`).join('')
        + es.map(e=>`<a href="${hE(e.eid)}"><span><strong>${esc(evName(e.name))}</strong></span><span class="sub">${where(e)}${fmtShort(e.date)}, ${e.date.slice(0,4)} · ${TYPEL[e.type]||e.type}</span></a>`).join('') + `</div>${more('e', es.length, eall.length)}` : '<p class="loading">No events match.</p>');
    const byName = !sSchool(sQuery(q)) && wall.some(r => sHit(sQuery(q), r._n ??= sNorm(r.name)));
    $('s-out').onclick = ev => { const b = ev.target.closest('[data-more]'); if (!b) return; S.sMore[b.dataset.more] += 40; renderSearch(); };
    if (!YNOW) loadY().then(I=>{ if (I.w.length && !$('v-search').hidden && $('s-q').value.trim() === q) renderSearch(); });
    let YB = '';
    if (YNOW && YNOW.w.length){ const {yc, ye, yw} = findY(q), cut = 15 + (S.sMore.y || 0);
      if (yc.length + ye.length + yw.length) YB = block(`Youth (${yc.length + ye.length + yw.length})`, `<p class="sub" style="margin:0 16px 8px">Youth clubs, events and wrestlers from events run on wrestle.live: results and records only, never rated.</p><div class="results">`
        + ye.map(y=>`<a href="${hYE(y.id)}"><span><strong>${esc(y.name)}</strong>${WL_MARK} ${Y_TAG}</span><span class="sub">${esc(y.where)}${y.where ? ' · ' : ''}${fmtDate(y.date)}</span></a>`).join('')
        + yc.map(c=>`<a href="${hYC(c[0])}"><span><strong>${esc(c[1])}</strong> <span class="sub">youth club</span></span><span class="sub">${c[2]} wrestler${c[2]===1?'':'s'}</span></a>`).join('')
        + yw.slice(0, cut).map(w=>{ const c = w[2] != null ? YNOW.club.get(w[2]) : null; return `<a href="${hYW(w[0])}"><span><strong>${esc(w[1])}</strong> <span class="sub">${c ? esc(c[1]) : 'Unattached'}</span></span><span class="sub">Youth</span></a>`; }).join('')
        + `</div>${more('y', Math.min(cut, yw.length), yw.length)}`); }
    const none = !wall.length && !tall.length && !eall.length && !us.length;      // only youth matches: the youth group leads
    $('s-out').innerHTML = lostNote + (none && YB ? YB + T + E + W : (byName ? W + T + E : T + E + W) + YB) +
      (wo.length+to.length ? block(`Outside Ohio (${wo.length+to.length})`, `<p class="sub" style="margin:0 16px 8px">Out-of-state schools and their wrestlers: rated from their bouts against Ohio teams, never ranked.</p><div class="results">`
        + to.map(t=>`<a href="${hT(t.tid)}"><span class="whoflex">${badge(t.tid, t.name, 's')}<strong>${esc(t.name)}</strong></span><span class="sub">${esc(STATES[t.st]||t.st)} · ${t.season}</span></a>`).join('')
        + wo.map(r=>`<a href="${hW(r.id)}"><span class="whoflex">${badge(r.tid, r.team, 's')}<span><strong>${esc(r.name)}</strong> <span class="sub">${esc(r.team)}</span></span></span><span class="sub">${r.season}${r.wt?' · '+r.wt:''}</span></a>`).join('') + '</div>') : '');
  }

  /* ---------- accuracy ---------- */
  function renderAccuracy(){
    const bt = META.backtest, rows = Object.entries(bt).filter(([,v])=>v.n>0 && v.acc!=null);
    const recent = rows.filter(([s])=>s>='2021-22');
    const avg = (k, rs) => rs.reduce((s,[,v])=>s+v[k]*v.n,0)/rs.reduce((s,[,v])=>s+v.n,0);
    const avgB = rs => rs.reduce((s,[,v])=>s+v.blend_acc*v.n,0)/rs.reduce((s,[,v])=>s+v.n,0);
    $('a-tiles').innerHTML = [
      ['Blend since 2021-22', (100*avgB(recent)).toFixed(1)+'%', `${recent.reduce((s,[,v])=>s+v.n,0).toLocaleString()} state bouts picked`],
      ['Ratings alone', (100*avg('acc',recent)).toFixed(1)+'%', 'same bouts'],
      ['Picking the better record', (100*avg('season_record',recent)).toFixed(1)+'%', 'same bouts'],
      ['In the database', META.bouts.toLocaleString(), `bouts · ${META.wrestlers.toLocaleString()} wrestlers`]
    ].map(([k,v,s])=>`<div class="card tile"><div class="k">${k}</div><div class="v">${v}</div><div class="s">${s}</div></div>`).join('');
    const LO = 0.55, HI = 0.80, wd = x => Math.max(2, Math.min(100, 100*(x-LO)/(HI-LO))).toFixed(1);
    const bar = (x, cls, best) => x==null ? `<td>${dash}</td>` : `<td><div class="pbar${best?' best':''}"><span class="tr"><i class="${cls}" style="width:${wd(x)}%"></i></span><b>${(100*x).toFixed(1)}%</b></div></td>`;
    $('a-body').innerHTML = rows.map(([s,v])=>{ const bl = v.blend_used ? v.blend_acc : null;
      const best = Math.max(bl??0, v.acc, v.season_record??0, v.district_place??0);
      const c = (x, cls='') => x==null ? `<td class="num ${cls}">${dash}</td>` : `<td class="num ${cls}${x===best?' good':''}">${(100*x).toFixed(1)}%</td>`;
      return `<tr><td>${s}</td><td class="num lg">${v.n.toLocaleString()}</td>${bar(bl,'k1',bl===best)}${bar(v.acc,'k2',v.acc===best)}${c(v.season_record)}${c(v.district_place,'lg')}</tr>`; }).join('');
    const agg = {}; for (const [s,wk,n,c] of (META.weekly_scores||[])){ const a = agg[s] ||= {w:0,n:0,c:0}; a.w++; a.n+=n; a.c+=c*n; }
    const LW = 0.65, HW = 0.85, ww = x => Math.max(2, Math.min(100, 100*(x-LW)/(HW-LW))).toFixed(1);
    $('a-week').innerHTML = Object.entries(agg).map(([s,a])=>{ const x = a.c/a.n; return `<tr><td>${s}</td><td class="num lg">${a.w}</td><td class="num">${a.n.toLocaleString()}</td><td><div class="pbar"><span class="tr"><i class="k1" style="width:${ww(x)}%"></i></span><b>${(100*x).toFixed(1)}%</b></div></td></tr>`; }).join('');
    const ob = (META.odds_backtest||{}).by_season || {};
    const og = (META.odds_backtest||{}).by_season_glicko || {};
    $('a-odds').innerHTML = Object.entries(ob).map(([s,v])=>{ const x = v.favourite_won/v.brackets; return `<tr><td>${s}</td><td class="num lg">${v.brackets}</td><td><div class="pbar"><span class="tr"><i class="k1" style="width:${Math.max(2,100*x).toFixed(1)}%"></i></span><b>${Math.round(100*x)}%</b></div></td><td class="num">${Math.round(100*v.avg_p_given_to_champion)}%</td></tr>`; }).join('');
    const by = {}; for (const [s,t,ev,n] of META.counts){ (by[s] ||= {})[t] = n; }
    $('a-data').innerHTML = Object.entries(by).map(([s,v])=>`<tr><td>${s}</td>${['tournament','dual','sectional','district','state','ms'].map(t=>`<td class="num${t==='dual'||t==='ms'?' lg':''}">${v[t]?v[t].toLocaleString():dash}</td>`).join('')}</tr>`).join('');
  }

  /* ---------- simulator ---------- */
  let PREDATA = null, PRE_READY = null;
  const loadPre = () => PREDATA ||= fetch('pre/'+META.pre_season+'.json').then(r=>r.ok?r.json():{cols:[],rows:[],teams:{}}).then(d=>{
    const ci = Object.fromEntries(d.cols.map((c,i)=>[c,i]));
    d.list = d.rows.map(r=>({id:r[ci.id], name:r[ci.name], g:r[ci.g], tid:r[ci.tid], wt:r[ci.wt], lastWt:r[ci.lastWt], r:r[ci.r], rd:r[ci.rd], gr:r[ci.gr],
      proj:r[ci.proj], ps:r[ci.ps], lastRank:r[ci.lastRank], lastPlace:r[ci.lastPlace], pp:ci.pp!=null ? r[ci.pp] : null,
      team:(TBY.get(r[ci.tid])||[]).at(-1)?.name || (d.teams[r[ci.tid]]||[])[0] || '', div:divOf(r[ci.tid]),
      from:(d.moved||{})[r[ci.id]] ? (TBY.get(d.moved[r[ci.id]][0])||[]).at(-1)?.name || '' : ''}));
    return d; });
  const SIM = {}, loadSim = s => SIM[s] ||= fetch('sim/'+s+'.json').then(r=>r.ok?r.json():{rows:[],teams:{}}).then(d=>{
    const ci = Object.fromEntries(d.cols.map((c,i)=>[c,i]));
    d.list = d.rows.map(r=>({id:r[ci.id], name:r[ci.name], g:r[ci.g], tid:r[ci.tid], wt:r[ci.wt], wts:r[ci.wts]||[], r:r[ci.r], rd:r[ci.rd], w:r[ci.w], l:r[ci.l], gr:r[ci.gr],
      proj: ci.proj!=null ? r[ci.proj] : null, ps: ci.ps!=null ? r[ci.ps] : null}));
    d.byTeam = new Map(); for (const x of d.list){ (d.byTeam.get(x.tid) || d.byTeam.set(x.tid,[]).get(x.tid)).push(x); }
    d.byId = new Map(d.list.map(x=>[x.id,x]));
    return d; });
  const SIMW = (season, g) => g==='F' ? [100,105,110,115,120,125,130,135,140,145,155,170,190,235]
    : +season.slice(0,4) >= 2021 ? [106,113,120,126,132,138,144,150,157,165,175,190,215,285]
    : +season.slice(0,4) >= 2011 ? [106,113,120,126,132,138,145,152,160,170,182,195,220,285]
    : [103,112,119,125,130,135,140,145,152,160,171,189,215,285];
  const simTeamName = (d, tid) => (d.teams[tid]||[])[0] || (TEAMS.filter(t=>t.tid===tid).sort((a,b)=>b.season.localeCompare(a.season))[0]||{}).name || 'This team';
  function pWin(a, b){ const sc = META.scale || 1.3, Q = 173.7178, phi = Math.hypot(a.rd, b.rd)/Q, gg = 1/Math.sqrt(1+3*phi*phi/(Math.PI**2));
    return 1/(1+Math.exp(-gg*sc*(a.r-b.r)/Q)); }
  const TYPES = ['fall','tf','md','dec','inj'], DUALPTS = {fall:6, tf:5, md:4, dec:3, inj:6}, BONUS = {fall:2, tf:1.5, md:1, dec:0, inj:2};
  const SIMRT = {fall:'Fall', tf:'Tech fall', md:'Major', dec:'Decision', inj:'Default'};
  const typeDist = q => (META.sim_types||[])[Math.min(9, Math.floor(q*10))] || {fall:.4, tf:.05, md:.1, dec:.45, inj:0};
  // seeded random numbers for tournaments: the same teams and settings always give the same odds
  let simRand = Math.random;
  const seeded = str => { let h = 1779033703 ^ str.length; for (let i=0;i<str.length;i++){ h = Math.imul(h ^ str.charCodeAt(i), 3432918353); h = h << 13 | h >>> 19; }
    let a = h >>> 0; return () => { a |= 0; a = a + 0x6D2B79F5 | 0; let t = Math.imul(a ^ a >>> 15, 1 | a); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; }; };
  function drawType(q){ const d = typeDist(q); let x = simRand(), acc = 0; for (const t of TYPES){ acc += d[t]||0; if (x < acc) return t; } return 'dec'; }
  // auto lineup: highest-rated wrestler at their usual weight, then fill empty weights with anyone who wrestled there
  function autoLineup(d, tid, season, g){
    const W = SIMW(season, g), team = (d.byTeam.get(tid)||[]).filter(x=>x.g===g).sort((a,b)=>b.r-a.r), used = new Set(), lu = {};
    for (const x of team) if (W.includes(x.wt) && lu[x.wt]==null){ lu[x.wt] = x.id; used.add(x.id); }
    for (const w of W) if (lu[w]==null){ const c = team.find(x=>!used.has(x.id) && x.wts.includes(w)); if (c){ lu[w] = c.id; used.add(c.id); } }
    if (season === META.sim_next)   // projected weights bunch up: fill a gap with an unused teammate one class away
      for (const w of W) if (lu[w]==null){ const i = W.indexOf(w); const c = team.find(x=>!used.has(x.id) && Math.abs(W.indexOf(x.wt)-i)===1); if (c){ lu[w] = c.id; used.add(c.id); } }
    for (const w of W) if (lu[w]==null) lu[w] = 0;
    return lu; }
  const S2 = {mode:'d', season:null, g:'M', a:null, b:null, luA:{}, luB:{}, teams:[], places:8, wt:null};
  function simHash(){
    if (S2.mode==='w') return `#matchups/w/${S.ca??''}/${S.cb??''}`;
    if (S2.mode==='d'){
      const ov = (lu, base) => Object.entries(lu).filter(([w,id])=>base[w]!==id).map(([w,id])=>w+'-'+id).join('.');
      return `#matchups/d/${S2.season}/${S2.g}/${S2.a??''}/${S2.b??''}/${S2.baseA?ov(S2.luA,S2.baseA):''}/${S2.baseB?ov(S2.luB,S2.baseB):''}`;
    }
    return `#matchups/t/${S2.season}/${S2.g}/${S2.teams.join(',')}/${S2.places}`;
  }
  function simPicker(inp, box, d, on){
    inp.oninput = () => { const q = inp.value.trim().toLowerCase(); if (q.length < 2){ box.hidden = true; return; }
      const hits = Object.entries(d.teams).filter(([tid,[nm]])=>nm.toLowerCase().includes(q) && (d.byTeam.get(+tid)||[]).some(x=>x.g===S2.g))
        .sort((a,b)=>{ const x = a[1][0].toLowerCase(), y = b[1][0].toLowerCase(); return (y===q)-(x===q) || y.startsWith(q)-x.startsWith(q) || x.localeCompare(y); }).slice(0,12);
      box.innerHTML = hits.map(([tid,[nm,dv]])=>`<button type="button" data-pick="${tid}"><span class="whoflex">${badge(+tid, nm, 's')}<span>${esc(nm)}</span></span><span class="sub">${dv?'D-'+dv:''}</span></button>`).join('') || '<p class="sub" style="padding:8px 12px">No team found this season.</p>';
      box.hidden = false; };
    box.onclick = e => { const b = e.target.closest('[data-pick]'); if (!b) return; box.hidden = true; inp.value = ''; on(+b.dataset.pick); };
  }
  async function renderSim(){
    const seasons = (META.sim_next ? [META.sim_next] : []).concat((META.sim_seasons||META.seasons).slice().reverse());
    if (!seasons.includes(S2.season)) S2.season = seasons[0];
    const projected = S2.season === META.sim_next;
    seg($('sim-mode'), [['w','Wrestlers'],['d','Dual meet'],['t','Tournament']], S2.mode, v=>{ S2.mode=v; history.replaceState(null,'',simHash()); renderSim(); });
    const WR = S2.mode==='w';
    $('sim-wr').hidden = !WR; $('sim-season').closest('.filters').hidden = WR; $('sim-how').hidden = WR;
    $('sim-lede').textContent = WR ? 'Head-to-head odds from each wrestler\'s latest rating, plus every past meeting and common opponent we have.'
      : S2.mode==='d' ? 'Pick two teams and we work out the dual from every wrestler\'s rating. Change any lineup spot to see how a move changes the odds.'
      : 'Pick the teams, or load them from a real event, and we play the tournament out thousands of times.';
    if (WR){ $('sim-dual').hidden = $('sim-tourn').hidden = true; $('sim-proj').hidden = true; return renderCompare(); }
    seg($('sim-g'), [['M','Boys'],['F','Girls']], S2.g, v=>{ S2.g=v; S2.a=S2.b=null; S2.teams=[]; history.replaceState(null,'',simHash()); renderSim(); });
    $('sim-season').innerHTML = seasons.map(s=>`<option value="${s}" ${s===S2.season?'selected':''}>${s}${s===META.sim_next?(META.sim_live?' (so far + projected)':' (projected)'):''}</option>`).join('');
    $('sim-proj').hidden = !projected;
    if (projected && META.sim_live) $('sim-proj').innerHTML = `<strong>${META.sim_next} so far.</strong> Wrestlers who have wrestled this season are here as they stand now, at the weights they have wrestled. The rest of each team is projected from ${META.sim_next_from} and is replaced as results come in. Change any spot to match the real lineup.`;
    else if (projected) $('sim-proj').innerHTML = `<strong>${META.sim_next} is projected from ${META.sim_next_from}.</strong> Seniors are removed, everyone else moves up a grade with the typical rating gain for that grade and to the weight wrestlers at their weight usually move to, and incoming freshmen start from their 8th-grade rating at the high school their middle school feeds. Wrestlers whose grade we don't know are marked when they may have graduated. Change any spot to match the real lineup.`;
    $('sim-season').onchange = e => { S2.season = e.target.value; S2.baseA = S2.baseB = null; history.replaceState(null,'',simHash()); renderSim(); };
    $('sim-dual').hidden = S2.mode!=='d'; $('sim-tourn').hidden = S2.mode!=='t';
    const d = await loadSim(S2.season);
    if (S2.mode==='d') return renderSimDual(d);
    return renderSimTourn(d);
  }
  function lineupFor(d, tid, which){
    const key = which==='A' ? 'luA' : 'luB', bkey = which==='A' ? 'baseA' : 'baseB', tkey = which==='A' ? 'tA' : 'tB';
    if (S2[tkey]!==tid+'|'+S2.season+'|'+S2.g || !S2[bkey]){
      S2[bkey] = autoLineup(d, tid, S2.season, S2.g);
      const ov = S2[key+'Ov'] || {};
      S2[key] = {...S2[bkey], ...ov}; S2[key+'Ov'] = null; S2[tkey] = tid+'|'+S2.season+'|'+S2.g;
    }
    return S2[key];
  }
  const simSub = x => sl([x.gr?ord(x.gr):'', x.proj==='F' ? '<span class="chip prov">Incoming freshman</span>' : x.proj ? '' : `${x.w}-${x.l}`,
      x.ps!=null && x.ps>=0.2 ? `<span class="chip prov" title="We don't know this wrestler's grade; about ${Math.round(100*x.ps)}% of wrestlers like this were seniors">May have graduated</span>` : '',
      hasProfile(x.id)?`<a href="${hW(x.id)}">profile</a>`:'']);
  function renderSimDual(d){
    simPicker($('sim-a'), $('sim-ar'), d, tid=>{ S2.a = tid; S2.baseA = null; history.replaceState(null,'',simHash()); renderSim(); });
    simPicker($('sim-b'), $('sim-br'), d, tid=>{ S2.b = tid; S2.baseB = null; history.replaceState(null,'',simHash()); renderSim(); });
    $('sim-a').placeholder = S2.a ? simTeamName(d, S2.a) : 'School name';
    $('sim-b').placeholder = S2.b ? simTeamName(d, S2.b) : 'School name';
    if (!S2.a || !S2.b){
      const rs = S2.season === META.sim_next && !META.sim_live ? META.sim_next_from : S2.season;
      const top = TEAMS.filter(t=>t.season===rs && t.g===S2.g && t.rank).sort((a,b)=>a.rank-b.rank).filter(t=>d.byTeam.has(t.tid)).slice(0,6);
      const pairs = [[0,1],[2,3],[4,5]].filter(([i,j])=>top[i]&&top[j]).map(([i,j])=>[top[i],top[j]]);
      $('sim-dout').innerHTML = `<div class="card sim-start"><div class="card-head"><h2>Pick two teams</h2><span class="sub">Type a school above, or try one of these</span></div>
        <div class="sim-pairs">${pairs.map(([x,y])=>`<a class="sim-pair" href="#matchups/d/${S2.season}/${S2.g}/${x.tid}/${y.tid}">${badge(x.tid,x.name,'s')}<span>${esc(x.name)}</span><span class="sub">vs</span>${badge(y.tid,y.name,'s')}<span>${esc(y.name)}</span></a>`).join('')}</div>
        <p class="note" style="margin:0;padding:0 20px 18px">${rs===S2.season?'':'Suggestions use '+rs+' team rankings. '}You can also start from any team page with "Simulate a dual".</p></div>`;
      return; }
    const none = [S2.a, S2.b].filter(t=>!(d.byTeam.get(t)||[]).some(x=>x.g===S2.g));
    if (none.length){ $('sim-dout').innerHTML = `<p class="note">${none.map(t=>esc(simTeamName(d,t))).join(' and ')} ${none.length>1?'have':'has'} no ${S2.g==='F'?'girls ':''}wrestlers in our results for ${S2.season}. Pick another team or season.</p>`; return; }
    const W = SIMW(S2.season, S2.g), A = lineupFor(d, S2.a, 'A'), B = lineupFor(d, S2.b, 'B');
    const bouts = W.map(w=>{ const a = d.byId.get(A[w]) || null, b = d.byId.get(B[w]) || null; return {w, a, b, p: a && b ? pWin(a,b) : a ? 1 : b ? 0 : null}; });
    // exact odds: each bout is a spread of possible point swings; adding the 14 spreads together gives the chance of
    // every final score difference (no random sampling, so the same lineup always gives the same numbers)
    const OFF = 100, SZ = 2*OFF+1;
    const boutDist = x => { const d = new Map();
      if (x.p==null){ d.set(0,1); return d; }
      if (!x.a || !x.b){ d.set(x.a ? 6 : -6, 1); return d; }
      const ta = typeDist(x.p), tb = typeDist(1-x.p), sa = TYPES.reduce((s,t)=>s+(ta[t]||0),0)||1, sb = TYPES.reduce((s,t)=>s+(tb[t]||0),0)||1;
      for (const t of TYPES){ const pts = DUALPTS[t];
        d.set(pts, (d.get(pts)||0) + x.p*(ta[t]||0)/sa); d.set(-pts, (d.get(-pts)||0) + (1-x.p)*(tb[t]||0)/sb); }
      return d; };
    const conv = (arr, d) => { const out = new Float64Array(SZ); for (let i=0;i<SZ;i++){ const v = arr[i]; if (!v) continue; for (const [k,q] of d){ const j = i+k; if (j>=0 && j<SZ) out[j] += v*q; } } return out; };
    const start = () => { const a = new Float64Array(SZ); a[OFF] = 1; return a; };
    const dists = bouts.map(boutDist);
    let all = start(); for (const d of dists) all = conv(all, d);
    const sumWhere = (arr, f) => { let s = 0; for (let i=0;i<SZ;i++) if (f(i-OFF)) s += arr[i]; return s; };
    const pa = sumWhere(all, v=>v>0), pt = sumWhere(all, v=>v===0), pb = sumWhere(all, v=>v<0);
    const quant = q => { let c = 0; for (let i=0;i<SZ;i++){ c += all[i]; if (c >= q) return i-OFF; } return 0; };
    const q10 = quant(0.1), q90 = quant(0.9);
    const expA = bouts.map(()=>0), expB = bouts.map(()=>0);
    bouts.forEach((x,i)=>{
      for (const [k,q] of dists[i]){ if (k>0) expA[i] += k*q; else expB[i] += -k*q; }
      if (x.p==null || !x.a || !x.b){ x.swing = 0; return; }
      let rest = start(); dists.forEach((d,j)=>{ if (j!==i) rest = conv(rest, d); });
      let w = 0, l = 0, pw = 0, pl = 0;
      for (const [k,q] of dists[i]){ const win = sumWhere(rest, v=>v+k>0); if (k>0){ w += q*win; pw += q; } else { l += q*win; pl += q; } }
      x.ifWin = pw ? w/pw : 0; x.ifLose = pl ? l/pl : 0;
      x.swing = (x.ifWin - x.ifLose) * 4*x.p*(1-x.p);
    });
    const EA = expA.reduce((s,v)=>s+v,0), EB = expB.reduce((s,v)=>s+v,0);
    const keys = bouts.map((x,i)=>[x.swing||0,i]).sort((x,y)=>y[0]-x[0]).slice(0,3).filter(k=>k[0]>0.04).map(k=>k[1]);
    const nmA = simTeamName(d, S2.a), nmB = simTeamName(d, S2.b), pc = x => x>=0.995?'>99%':x<0.005?'<1%':Math.round(100*x)+'%';
    const marg = v => v===0 ? 'tied' : v>0 ? `${esc(nmA)} by ${v}` : `${esc(nmB)} by ${-v}`;
    const opts = (team, w, cur) => { const W2 = (d.byTeam.get(team)||[]).filter(x=>x.g===S2.g).sort((a,b)=>Math.abs(a.wt-w)-Math.abs(b.wt-w) || b.r-a.r);
      return `<option value="0"${!cur?' selected':''}>Open (forfeit)</option>` + W2.map(x=>`<option value="${x.id}"${x.id===cur?' selected':''}>${esc(x.name)} · ${x.wt} · ${x.r}${x.proj==='F'?' · freshman':x.ps>=0.2?' · may have graduated':''}</option>`).join(''); };
    const keyTip = x => `A key bout is close to a toss-up and swings the team result the most. If ${esc(nmA)} wins this bout, it wins the dual ${pc(x.ifWin)} of the time; if it loses it, ${pc(x.ifLose)}.`;
    const likely = (q) => { const t = typeDist(q); const best = TYPES.slice().sort((x,y)=>(t[y]||0)-(t[x]||0))[0]; return SIMRT[best]; };
    $('sim-dout').innerHTML = `
      <div class="card" style="margin-top:16px">
        <div class="sim-sum">
          <div class="side">${badge(S2.a, nmA, 'xl')}<div style="min-width:0"><div class="tn">${esc(nmA)}</div><div class="big" style="color:var(--accent)">${pc(pa)}</div><div class="sub">to win</div></div></div>
          <div class="mid">Expected score<b>${Math.round(EA)} – ${Math.round(EB)}</b>8 in 10 outcomes: ${marg(q10)} to ${marg(q90)}${pt>=0.005?`<br>Tie ${pc(pt)}`:''}</div>
          <div class="side r"><div style="min-width:0"><div class="tn">${esc(nmB)}</div><div class="big" style="color:#B45309">${pc(pb)}</div><div class="sub">to win</div></div>${badge(S2.b, nmB, 'xl')}</div>
        </div>
        <div class="wpbar2" aria-hidden="true"><i class="a" style="width:${100*pa}%"></i><i class="t" style="width:${100*pt}%"></i><i class="b" style="width:${100*pb}%"></i></div>
        <div class="sim-legend"><span>Odds from every possible outcome of the ${W.length} bouts</span><span>${keys.length?'<span class="sim-key" aria-hidden="true">Key</span> bouts are the close ones most likely to decide the dual':''}</span></div>
      </div>
      <div class="sim-acts"><button type="button" class="btn ghost" id="sim-reset">Reset lineups</button><button type="button" class="btn ghost" id="sim-swap">Swap sides</button><button type="button" class="btn ghost" id="sim-link">Copy link</button></div>
      <div class="card">
        <div class="card-head"><h2>Bout by bout</h2><span class="sub">Change any spot; odds update right away</span></div>
        <table class="sim-lu"><thead><tr><th class="num">Wt</th><th>${esc(nmA)}</th><th>Odds</th><th>${esc(nmB)}</th><th class="num lg">Exp. points</th></tr></thead><tbody>
        ${bouts.map((x,i)=>`<tr class="${keys.includes(i)?'swing':''}"><td class="num"><strong>${x.w}</strong>${keys.includes(i)?`<span class="sim-key" tabindex="0" title="${keyTip(x)}" aria-label="Key bout. ${keyTip(x)}">Key</span>`:''}</td>
          <td><select data-side="A" data-w="${x.w}" aria-label="${esc(nmA)} at ${x.w}">${opts(S2.a, x.w, A[x.w])}</select>${x.a?simSub(x.a):''}</td>
          <td class="odds">${x.p==null?'<span class="sub">Both open</span>':!x.a||!x.b?`<span class="sub">Forfeit to ${esc(x.a?nmA:nmB)}</span>`:`<div class="sub">${pc(x.p)} · ${pc(1-x.p)}</div><div class="tr" aria-hidden="true"><i style="width:${100*x.p}%"></i></div><div class="sub">Likely: ${likely(Math.max(x.p,1-x.p))}</div>${keys.includes(i)?`<div class="sub keyline">${esc(nmA)} wins the dual ${pc(x.ifWin)} if this goes its way, ${pc(x.ifLose)} if not</div>`:''}`}</td>
          <td><select data-side="B" data-w="${x.w}" aria-label="${esc(nmB)} at ${x.w}">${opts(S2.b, x.w, B[x.w])}</select>${x.b?simSub(x.b):''}</td>
          <td class="num lg">${expA[i].toFixed(1)} – ${expB[i].toFixed(1)}</td></tr>`).join('')}
        </tbody></table>
      </div>`;
    $('sim-dout').querySelectorAll('select[data-side]').forEach(s=>s.onchange = e => {
      const lu = s.dataset.side==='A' ? S2.luA : S2.luB, w = +s.dataset.w, id = +s.value;
      if (id){ for (const k in lu) if (lu[k]===id && +k!==w) lu[k] = 0; }   // a wrestler fills one spot
      lu[w] = id; history.replaceState(null,'',simHash()); renderSimDual(d); });
    $('sim-reset').onclick = () => { S2.luA = {...S2.baseA}; S2.luB = {...S2.baseB}; history.replaceState(null,'',simHash()); renderSimDual(d); };
    $('sim-swap').onclick = () => { [S2.a,S2.b,S2.luA,S2.luB,S2.baseA,S2.baseB,S2.tA,S2.tB] = [S2.b,S2.a,S2.luB,S2.luA,S2.baseB,S2.baseA,S2.tB,S2.tA]; history.replaceState(null,'',simHash()); renderSimDual(d); };
    $('sim-link').onclick = async () => { try { await navigator.clipboard.writeText(location.href); $('sim-link').textContent = 'Link copied'; } catch(e){ $('sim-link').textContent = 'Copy the address bar'; } };
  }
  // tournament: generic double-elimination bracket (champ rounds, consolation wrestle-backs, places up to 8)
  function seedOrder(n){ let o = [1,2]; while (o.length < n){ const m = o.length*2; o = o.flatMap(s=>[s, m+1-s]); } return o; }
  function runBracket(entries, places, tally){
    let size = 4; while (size < entries.length) size *= 2;
    const k = Math.log2(size), order = seedOrder(size), slots = order.map(s=>entries[s-1]||null);
    const pts = new Map(entries.map(e=>[e.id,0]));
    const bout = (a, b, adv) => { if (!a) return [b, null]; if (!b) return [a, null];
      const p = pWin(a,b), aw = simRand() < p, w = aw ? a : b, l = aw ? b : a, t = drawType(aw ? p : 1-p);
      pts.set(w.id, pts.get(w.id) + adv + BONUS[t]); return [w, l]; };
    let cur = slots; const losers = [];
    for (let r=1; r<=k; r++){
      const nxt = [], ls = [];
      for (let i=0; i<cur.length; i+=2){ const [w,l] = bout(cur[i], cur[i+1], 2); nxt.push(w); ls.push(l); }
      losers[r] = ls; cur = nxt;
    }
    const place = new Map(); place.set(cur[0]?.id, 1); const fl = losers[k][0]; if (fl) place.set(fl.id, 2);
    if (k===2){ const [w,l] = bout(losers[1][0], losers[1][1], 1); if (w) place.set(w.id,3); if (l) place.set(l.id,4); }
    else {
      let pool = []; for (let i=0; i<losers[1].length; i+=2) pool.push(bout(losers[1][i], losers[1][i+1], 1)[0]);
      let seventh = null;
      for (let r=2; r<=k-1; r++){
        const L = losers[r], m = pool.length, merged = [], mergedL = [];
        for (let i=0; i<m; i++){ const [w,l] = bout(pool[i], L[m-1-i], 1); merged.push(w); mergedL.push(l); }
        pool = merged;
        if (r === k-1){ const [w3,l3] = bout(pool[0], pool[1], 1); if (w3) place.set(w3.id,3); if (l3) place.set(l3.id,4);
          const [w5,l5] = bout(mergedL[0], mergedL[1], 0); if (w5) place.set(w5.id,5); if (l5) place.set(l5.id,6); }
        else { const halved = [], hl = []; for (let i=0; i<pool.length; i+=2){ const [w,l] = bout(pool[i], pool[i+1], 1); halved.push(w); hl.push(l); }
          pool = halved; if (r === k-2) seventh = hl; }
      }
      if (seventh && places >= 8){ const [w7,l7] = bout(seventh[0], seventh[1], 0); if (w7) place.set(w7.id,7); if (l7) place.set(l7.id,8); }
    }
    const PP = [16,12,10,9,7,6,4,3];
    for (const e of entries){ const pl = place.get(e.id); const t = tally.get(e.id);
      if (pl && pl <= places){ pts.set(e.id, pts.get(e.id) + PP[pl-1]); t.placed++; if (pl===1) t.champ++; if (pl<=3) t.top3++; t.placeSum += pl; } else t.placeSum += places + 1;
      t.pts += pts.get(e.id); }
    return pts;
  }
  async function renderSimTourn(d){
    simPicker($('sim-t'), $('sim-tr'), d, tid=>{ if (!S2.teams.includes(tid)) S2.teams.push(tid); history.replaceState(null,'',simHash()); renderSimTourn(d); });
    // real events this season: the teams that wrestled in them
    const evSeason = S2.season === META.sim_next && !META.sim_live ? META.sim_next_from : S2.season;
    const evs = EVENTS.filter(e=>e.season===evSeason && (e.g||'M')===S2.g && e.lv!=='MS' && e.level!=='MS' && ['tournament','sectional','district'].includes(e.type)).sort((a,b)=>a.date.localeCompare(b.date));
    const evIn = $('sim-ev'), evBox = $('sim-evr');
    evIn.placeholder = `Search ${evs.length} events${evSeason!==S2.season?' from '+evSeason:''}, or click to browse`;
    const evRank = { state:0, district:1, sectional:2, tournament:3 };
    let evHits = [], evAt = -1;
    const showEv = () => {
      const q = evIn.value.trim().toLowerCase().split(/\s+/).filter(Boolean);
      evHits = evs.filter(e=>{ const t = (evName(e.name)+' '+(e.type||'')).toLowerCase(); return q.every(w=>t.includes(w)); })
        .sort((a,b)=>b.date.localeCompare(a.date) || (evRank[a.type]??9)-(evRank[b.type]??9)).slice(0, 400);
      evAt = -1;
      evBox.innerHTML = evHits.map((e,i)=>`<button type="button" role="option" id="sim-evo${i}" data-ev="${e.eid}"><span>${esc(evName(e.name))}</span><span class="sub">${esc(TYPEL[e.type]||e.type)} · ${fmtShort(e.date)}</span></button>`).join('')
        || '<p class="sub" style="padding:8px 12px">No event matches.</p>';
      evBox.hidden = false; evIn.setAttribute('aria-expanded','true'); };
    const pickEv = async id => { evBox.hidden = true; evIn.setAttribute('aria-expanded','false'); const ev = evs.find(e=>e.eid===id); evIn.value = ev ? evName(ev.name) : '';
      const sd = await loadSeason(evSeason);
      const tids = new Set(); for (const b of (sd.byEvent.get(id)||[])){ if (b[5]!=null) tids.add(b[5]); if (b[6]!=null) tids.add(b[6]); }
      S2.teams = [...tids].filter(t=>(d.byTeam.get(t)||[]).some(x=>x.g===S2.g)); history.replaceState(null,'',simHash()); renderSimTourn(d); };
    evIn.onfocus = showEv; evIn.onclick = showEv; evIn.oninput = showEv;
    evIn.onkeydown = e => {
      if (evBox.hidden && (e.key==='ArrowDown' || e.key==='Enter')){ showEv(); e.preventDefault(); return; }
      const opts = [...evBox.querySelectorAll('[role="option"]')];
      if (e.key==='ArrowDown' || e.key==='ArrowUp'){ e.preventDefault(); if (!opts.length) return;
        evAt = (evAt + (e.key==='ArrowDown' ? 1 : -1) + opts.length) % opts.length;
        opts.forEach((o,i)=>o.setAttribute('aria-selected', String(i===evAt))); opts[evAt].scrollIntoView({block:'nearest'}); evIn.setAttribute('aria-activedescendant', opts[evAt].id); }
      else if (e.key==='Enter'){ e.preventDefault(); const o = opts[evAt>=0?evAt:0]; if (o) pickEv(+o.dataset.ev); }
      else if (e.key==='Escape'){ evBox.hidden = true; evIn.setAttribute('aria-expanded','false'); } };
    evBox.onclick = e => { const b = e.target.closest('[data-ev]'); if (b) pickEv(+b.dataset.ev); };
    $('sim-places').value = String(S2.places); $('sim-places').onchange = e => { S2.places = +e.target.value; history.replaceState(null,'',simHash()); renderSimTourn(d); };
    $('sim-chips').innerHTML = S2.teams.map(t=>`<span class="chip">${badge(t, simTeamName(d,t), 's')} ${esc(simTeamName(d,t))}<button type="button" data-rm="${t}" aria-label="Remove ${esc(simTeamName(d,t))}">×</button></span>`).join('')
      + (S2.teams.length ? `<button type="button" class="btn ghost" id="sim-clear">Clear all</button>` : '');
    $('sim-chips').onclick = e => { const b = e.target.closest('[data-rm]'); if (b){ S2.teams = S2.teams.filter(t=>t!==+b.dataset.rm); history.replaceState(null,'',simHash()); renderSimTourn(d); }
      if (e.target.id==='sim-clear'){ S2.teams = []; history.replaceState(null,'',simHash()); renderSimTourn(d); } };
    if (S2.teams.length < 2){ $('sim-tout').innerHTML = '<p class="note">Add at least two teams, or load the teams from a real event.</p>'; return; }
    const W = SIMW(S2.season, S2.g), lineups = new Map(S2.teams.map(t=>[t, autoLineup(d, t, S2.season, S2.g)]));
    const byW = new Map(W.map(w=>[w, S2.teams.map(t=>d.byId.get(lineups.get(t)[w])).filter(Boolean).sort((a,b)=>b.r-a.r).slice(0,32)]));
    simRand = seeded(S2.season + S2.g + S2.teams.slice().sort((a,b)=>a-b).join(',') + '|' + S2.places);
    const N = Math.max(1000, Math.min(4000, Math.round(160000 / (S2.teams.length*14)))), tally = new Map(), teamT = new Map(S2.teams.map(t=>[t,{pts:0, win:0, top3:0}]));
    for (const [w,list] of byW) for (const e of list) tally.set(e.id, {champ:0, top3:0, placed:0, placeSum:0, pts:0});
    for (let n=0; n<N; n++){
      const tp = new Map(S2.teams.map(t=>[t,0]));
      for (const [w,list] of byW){ if (list.length < 2) continue; const pts = runBracket(list, S2.places, tally); for (const e of list) tp.set(e.tid, tp.get(e.tid) + pts.get(e.id)); }
      const rank = [...tp.entries()].sort((a,b)=>b[1]-a[1]);
      rank.forEach(([t,p],i)=>{ const x = teamT.get(t); x.pts += p; if (i===0) x.win++; if (i<3) x.top3++; });
    }
    const pc = x => x>=0.995?'>99%':x<0.005?'<1%':Math.round(100*x)+'%';
    const standings = [...teamT.entries()].map(([t,x])=>({t, pts:x.pts/N, win:x.win/N, top3:x.top3/N})).sort((a,b)=>b.pts-a.pts);
    if (!W.includes(S2.wt)) S2.wt = W[0];
    const list = byW.get(S2.wt)||[];
    $('sim-tout').innerHTML = `
      <div class="grid2 eq">
        <div class="card"><div class="card-head"><h2>Team standings</h2><span class="sub">${N.toLocaleString()} simulated tournaments</span></div>
          <table><thead><tr><th>#</th><th>Team</th><th class="num">Exp. points</th><th class="num">Team title</th><th class="num lg">Top 3</th></tr></thead><tbody>
          ${standings.map((s,i)=>`<tr><td>${i+1}</td><td class="who"><div class="whoflex">${badge(s.t, simTeamName(d,s.t), 's')}<span>${tlink(s.t, simTeamName(d,s.t))}</span></div></td><td class="num"><strong>${s.pts.toFixed(1)}</strong></td><td class="num">${pc(s.win)}</td><td class="num lg">${pc(s.top3)}</td></tr>`).join('')}
          </tbody></table></div>
        <div class="card"><div class="card-head"><h2 id="sim-wh">${S2.wt} lbs</h2><span class="sub">${list.length} entries · seeded by rating</span></div>
          <div class="pills" id="sim-wts" role="group" aria-label="Weight class" style="padding:10px 16px 0"></div>
          <table><thead><tr><th class="num">Seed</th><th>Wrestler</th><th class="num">Rating</th><th class="num">Champ</th><th class="num">Top 3</th><th class="num lg">Places</th></tr></thead><tbody>
          ${list.map((e,i)=>{ const t = tally.get(e.id); return `<tr><td class="num">${i+1}</td><td class="who"><div class="whoflex">${badge(e.tid, simTeamName(d,e.tid), 's')}<div>${hasProfile(e.id)?wlink(e.id,e.name):esc(e.name)}${sl([esc(simTeamName(d,e.tid)), e.gr?ord(e.gr):''])}</div></div></td><td class="num">${e.r}</td><td class="num"><strong>${pc(t.champ/N)}</strong></td><td class="num">${pc(t.top3/N)}</td><td class="num lg">${pc(t.placed/N)}</td></tr>`; }).join('') || empty(6,'No entries at this weight.')}
          </tbody></table></div>
      </div>
      <div class="sim-acts"><button type="button" class="btn ghost" id="sim-tlink">Copy link</button></div>
      <p class="note">Tournament odds come from ${N.toLocaleString()} simulated tournaments. The same teams and settings always give the same numbers; small differences of a point or two between similar setups are normal.</p>`;
    pills($('sim-wts'), W, S2.wt, 'sw', w=>{ S2.wt = w; renderSimTourn(d); });
    $('sim-tlink').onclick = async () => { try { await navigator.clipboard.writeText(location.href); $('sim-tlink').textContent = 'Link copied'; } catch(e){ $('sim-tlink').textContent = 'Copy the address bar'; } };
  }

  /* ---------- routing ---------- */

  /* ================= middle school teams =================
     msteams.json: one row per middle school team-season. A middle school team shares its high school's id where it
     carries the same name (Green), and has its own where it does not (Learwood). Its page is the team page in
     "middle school" mode: #team/<id>/ms. A team with no high school rows opens in that mode on its own. */
  const MST = new Map();            // tid -> [{tid, season, g, name, n, ranked, w, l}]
  const hMT = (tid, s, g) => `#team/${tid}` + (TBY.has(tid) || s ? '/ms' : '') + (s ? `/${s}/${g}` : '');      // a team with no high school rows needs no "/ms"
  const mtlink = (tid, name) => tid && MST.has(tid) ? `<a class="lnk plain" href="${hMT(tid)}">${esc(name)}</a>` : tlink(tid, name);
  // the high school most of a middle school team's wrestlers went on to (4+ wrestlers, 60%+)
  let MS_FEED = null;
  const msFeed = tid => { if (!MS_FEED){ MS_FEED = new Map(); const c = new Map();
      for (const r of MSROWS){ const h = BYID.get(r.id); if (!h || r.tid == null) continue; const t = h[h.length-1].tid; if (t == null) continue;
        const m = c.get(r.tid) || c.set(r.tid, new Map()).get(r.tid); m.set(t, (m.get(t)||new Set()).add(r.id)); }
      for (const [t, m] of c){ const tot = new Set([...m.values()].flatMap(x=>[...x])).size, top = [...m.entries()].sort((a,b)=>b[1].size-a[1].size)[0];
        if (top && top[1].size >= 4 && top[1].size / tot >= 0.6) MS_FEED.set(t, top[0]); } }
    return MS_FEED.get(tid) ?? (TBY.has(tid) ? tid : null); };
  async function renderTeamMS(){
    const recs = MST.get(S.team) || [];
    if (!recs.length){ $('tm-name').textContent = 'Team not found'; return; }
    const gs = [...new Set(recs.map(r=>r.g))];
    if (!gs.includes(S.tmG)) S.tmG = gs.includes('M') ? 'M' : gs[0];
    const seasons = [...new Set(recs.filter(r=>r.g===S.tmG).map(r=>r.season))].sort().reverse();
    if (!seasons.includes(S.tmSeason)) S.tmSeason = seasons[0];
    const t = recs.find(r=>r.season===S.tmSeason && r.g===S.tmG), tid = S.team, want = S.tmSeason, g = S.tmG;
    $('tm-name').textContent = t.name;
    $('tm-eyebrow').textContent = `Middle school team · ${g==='M'?'Boys':'Girls'}`;
    const feed = msFeed(tid), fname = feed != null ? (TBY.get(feed)||[]).at(-1)?.name : null;
    { const si = (await loadSchools())[feed ?? tid]; if (tid !== S.team || S.tmLv !== 'MS') return;
      const mono = $('tm-mono'); mono.textContent = teamIni(t.name);
      const c0 = si && si[3][0], lg = LOGOS[feed ?? tid]; mono.classList.toggle('haslogo', !!lg); if (lg) mono.innerHTML = `<img src="logos/${lg}" alt="">`;
      mono.style.background = c0 || '#1A3686'; mono.style.color = c0 ? inkOn(c0) : '#fff'; mono.style.boxShadow = '0 0 0 3px ' + ((si && si[3][1]) || '#8FB0FF');
      $('tm-bar').innerHTML = si ? si[3].map(c=>`<span style="background:${c}"></span>`).join('') : ''; $('tm-bar').hidden = !(si && si[3].length);
      $('tm-school').hidden = false;
      $('tm-school').innerHTML = `<strong>Middle school</strong>` + (fname ? `<span>Its wrestlers go on to ${tlink(feed, fname)}</span>` : '') + (si && si[4] ? `<span>${esc(si[4].replace(/, Ohio$/,''))}</span>` : ''); }
    seasonOpts($('tm-season'), seasons, want);
    $('tm-views').hidden = true; $('tm-hist').hidden = true; $('tm-seasonview').hidden = false; $('tm-season-f').hidden = false; $('tm-sim').hidden = true; $('tm-moved').hidden = true;
    wlNext('tm-wl', $('tm-views'), u=>u.teams.some(x=>x.tid===tid && x.ms), ()=>S.team===tid && S.tmLv==='MS' && !$('v-team').hidden ? 'Coming up' : '');
    seg($('tm-gender'), gs.length > 1 ? [['M','Boys'],['F','Girls']].filter(([v])=>gs.includes(v)) : [], g, v=>{ S.tmG = v; history.replaceState(null,'', hMT(tid, S.tmSeason, v)); renderTeam(); });
    $('tm-gender').hidden = gs.length < 2; $('tm-gender').parentElement.hidden = false;
    $('tm-lineup').closest('.card').hidden = true; $('tm-lineup').closest('.grid2').style.gridTemplateColumns = '1fr';
    $('tm-tiles').innerHTML = [['Wrestlers', t.n, want], ['Ranked wrestlers', t.ranked, 'in the middle school rankings'], ['Record', `${t.w}-${t.l}`, 'bouts in our results'],
      ['High school', fname || '–', fname ? 'where most of its wrestlers go on to wrestle' : 'not clear from our results']]
      .map(([k,v,x])=>`<div class="card tile"><div class="k">${k}</div><div class="v"${String(v).length > 12 ? ' style="font-size:22px;line-height:1.15"' : ''}>${esc(v)}</div><div class="s">${esc(x)}</div></div>`).join('');
    $('tm-events').innerHTML = '<p class="loading">Loading events…</p>';
    $('tm-roster').innerHTML = '<tr><td colspan="7" class="loading">Loading roster…</td></tr>';
    const d = await loadSeason(want, 'MS');
    if (want !== S.tmSeason || tid !== S.team || g !== S.tmG || S.tmLv !== 'MS') return;
    const rs = new Map(), per = new Map();
    for (const b of (d.byTeam.get(tid) || [])){ const ev = EVBY.get(b[0]); if (!ev || (ev.g && ev.g !== g)) continue;
      const x = per.get(b[0]) || {w:0, l:0}; if (b[5]===tid) x.w++; if (b[6]===tid) x.l++; per.set(b[0], x);
      const rt = d.rt[b[7]]; if (rt==='ff' || rt==='mff' || rt==='bye') continue;
      for (const [id, me, won] of [[b[3], b[5], true], [b[4], b[6], false]]){ if (me !== tid) continue;
        const y = rs.get(id) || {id, w:0, l:0, f:0, wts:new Map()}; won ? y.w++ : y.l++; if (won && rt==='fall') y.f++;
        y.wts.set(b[1], (y.wts.get(b[1])||0)+1); rs.set(id, y); } }
    const YRS = {6:'6th', 7:'7th', 8:'8th'};
    const list = [...rs.values()].map(x=>{ const row = (MSBY.get(x.id)||[]).find(r=>r.season===want);
      const wt = [...x.wts.entries()].sort((a,b)=>b[1]-a[1])[0]?.[0] ?? null; return {...x, wt, row}; }).sort((a,b)=>(a.wt??999)-(b.wt??999) || (b.w-b.l)-(a.w-a.l));
    $('tm-roster-h').textContent = `Full roster · ${want}`;
    $('tm-roster-sub').textContent = `${list.length} wrestlers with a bout in our results · forfeits not counted`;
    $('tm-roster').innerHTML = list.map(x=>`<tr><td class="num"><strong>${x.wt??'–'}</strong></td>
      <td class="who">${hasProfile(x.id) ? wlink(x.id, d.names[x.id]||'?') : esc(d.names[x.id]||'?')}${sl([x.row&&x.row.gr?YRS[x.row.gr]:'', x.f?`${x.f} pin${x.f>1?'s':''}`:''])}</td>
      <td class="num lg">${x.row&&x.row.gr?YRS[x.row.gr]||dash:dash}</td><td class="num">${x.w}-${x.l}</td><td class="num lg">${x.f}</td>
      <td class="num lg">${x.row?x.row.r:dash}</td><td class="num">${x.row&&x.row.ranked?`<a class="lnk plain" href="#rankings/MS/${want}/${x.row.g}/${x.row.wt}/${x.id}" title="See the ${x.row.wt} rankings">#${x.row.rank}${x.row.g!==g ? (x.row.g==='F' ? ' girls' : ' boys') : ''}</a>`:dash}</td></tr>`).join('') || empty(7, 'No bouts for this team in our results this season.');
    const evs = [...per.entries()].map(([e,x])=>({e:EVBY.get(e), ...x})).sort((a,b)=>a.e.date.localeCompare(b.e.date));
    $('tm-events').innerHTML = evs.length ? `<table><thead><tr><th class="lg">Date</th><th>Event</th><th class="lg">Type</th><th class="num">W-L</th></tr></thead><tbody>${
      evs.map(x=>`<tr><td class="sub lg" style="white-space:nowrap">${fmtShort(x.e.date)}</td><td class="who">${elink(x.e.eid,x.e.name)}${sl([fmtShort(x.e.date), evTag(x.e)])}</td><td class="lg">${evTag(x.e)}</td><td class="num">${x.w}-${x.l}</td></tr>`).join('')}</tbody></table>`
      : '<p class="loading">No events for this team in the database this season.</p>';
  }

  /* ================= following =================
     Wrestlers and teams the visitor has starred, kept in this browser only (no account). */
  const FOL_KEY = 'wlr-follow';
  const folGet = () => { try { const x = JSON.parse(localStorage.getItem(FOL_KEY) || '{}'); return {w: (x.w||[]).filter(Number.isInteger), t: (x.t||[]).filter(Number.isInteger), m: (x.m||[]).filter(Number.isInteger)}; } catch (e) { return {w:[], t:[], m:[]}; } };     // w wrestlers, t high school teams, m middle school teams
  const folSet = f => { try { localStorage.setItem(FOL_KEY, JSON.stringify(f)); return true; } catch (e) { return false; } };
  function folButton(btn, kind, id){
    const on = folGet()[kind].includes(id);
    btn.setAttribute('aria-pressed', String(on)); btn.textContent = on ? '★ Following' : '☆ Follow';
    btn.onclick = () => { const f = folGet(), i = f[kind].indexOf(id); if (i >= 0) f[kind].splice(i, 1); else f[kind].unshift(id); f[kind] = f[kind].slice(0, 40);
      if (!folSet(f)) $('live').textContent = 'This browser is not letting the site save who you follow.';
      folButton(btn, kind, id); $('live').textContent = i >= 0 ? 'No longer following' : 'Following. They will show on the home page.'; };
  }
  async function renderFollowing(){
    const f = folGet(), box = $('h-folbody'), latest = META.seasons.at(-1);
    const ws = f.w.map(id => (BYID.get(id) || MSBY.get(id) || []).slice().sort((a,b)=>a.season.localeCompare(b.season)).at(-1)).filter(Boolean);
    const ts = f.t.map(id => (TBY.get(id)||[]).slice().sort((a,b)=>a.season.localeCompare(b.season) || (a.g==='M'?1:-1)).at(-1)).filter(Boolean)
      .concat(f.m.map(id => { const r = (MST.get(id)||[]).slice().sort((a,b)=>a.season.localeCompare(b.season)).at(-1); return r ? {...r, ms:true} : null; }).filter(Boolean));
    // with someone followed, Following leads the page; with no one, the hint sits lower down
    { const sec = $('h-folsec'), ones = $('h-ones').closest('section'), wk = $('h-wksec');
      if (ws.length || ts.length){ if (sec.nextElementSibling !== ones) ones.before(sec); } else if (wk.nextElementSibling !== sec) wk.after(sec); }
    if (!ws.length && !ts.length){ box.innerHTML = `<p class="folhint">Follow a wrestler or a team (the ☆ Follow button on their page) and their latest results, rank changes and next event show up here. Saved on this device.</p>`; return; }
    const draw = (mv, U, last) => { box.innerHTML = `<div class="fol">` + ws.map(r => { const m = mv.get(r.id), ms = !BYID.has(r.id);
        const rk = r.ranked ? `#${r.rank} at ${r.wt}` : r.wt ? `${r.wt} lbs` : '', ch = m && m[7] != null && m[6] !== m[7] ? (m[7] > m[6] ? ` <span class="up">▲ ${m[7]-m[6]}</span>` : ` <span class="down">▼ ${m[6]-m[7]}</span>`) : '';
        const le = last.get(r.id);
        return `<a class="fc" href="${hW(r.id)}">${badge(r.tid, r.team, 'm')}<span style="min-width:0"><b>${esc(r.name)}</b><span class="sub">${[esc(r.team), rk + ch, `${r.w}-${r.l}`, ms ? 'middle school' : '', r.season !== latest ? r.season : ''].filter(Boolean).join(' · ')}</span>${le ? `<span class="sub">Last: ${le}</span>` : ''}</span></a>`; }).join('')
      + ts.map(t => { const ms = !!t.ms, nx = U.find(u => u.st !== 'final' && u.teams.some(x=>x.tid===t.tid && !!x.ms === ms));
        return `<a class="fc" href="${ms ? hMT(t.tid) : hT(t.tid)}">${badge(t.tid, t.name, 'm')}<span style="min-width:0"><b>${esc(t.name)}</b><span class="sub">${ms ? 'Middle school team' : [t.rank ? `#${t.rank} ${t.g==='F'?'girls':'boys'} team` : '', t.div ? 'D-'+t.div : '', t.season].filter(Boolean).join(' · ')}</span>${nx ? `<span class="sub">Next: ${esc(nx.name)}, ${wlDates(nx)}</span>` : ''}</span></a>`; }).join('') + `</div>`; };
    draw(new Map(), [], new Map());
    // rank changes on the latest weekly list, each wrestler's last event, each team's next event on wrestle.live
    const [W, U, d] = await Promise.all([loadWeekly(latest).catch(()=>null), loadWLUp(), ws.some(r=>r.season===latest && BYID.has(r.id)) ? loadSeason(latest) : null]);
    if ($('v-home').hidden) return;
    const wk = W && W.weeks && W.weeks.at(-1), mv = new Map(((W && W.movers && W.movers[wk]) || []).map(m=>[m[0], m])), last = new Map();
    if (d) for (const r of ws){ const bs = d.byW.get(r.id); if (!bs) continue;
      const byE = new Map(); for (const b of bs) (byE.get(b[0]) || byE.set(b[0], []).get(b[0])).push(b);
      const e = [...byE.keys()].map(x=>EVBY.get(x)).filter(Boolean).sort((a,b)=>b.date.localeCompare(a.date))[0]; if (!e) continue;
      const won = byE.get(e.eid).filter(b=>b[3]===r.id).length; last.set(r.id, `${won}-${byE.get(e.eid).length - won} at ${esc(evName(e.name))}, ${fmtShort(e.date)}`); }
    draw(mv, U, last);
  }

  /* ================= this week ================= */
  let WEEKX = null; const loadWeekX = () => WEEKX ||= fetch('week.json').then(r=>r.ok?r.json():null).catch(()=>null);
  async function renderWeek(){
    const latest = META.seasons.at(-1), sec = $('h-wksec');
    const [W, X] = await Promise.all([loadWeekly(latest).catch(()=>null), loadWeekX()]);
    if ($('v-home').hidden) return;
    if (!X || !W || !W.weeks || !W.weeks.length){ sec.hidden = true; return; }
    const live = META.sim_live && META.sim_next === latest;
    $('h-wk').textContent = live ? 'This week' : 'The latest week of results';
    $('h-wk-sub').textContent = `${fmtDate(X.from)} to ${fmtDate(X.to)} · ${X.events} high school events${live ? '' : ' · the ' + latest + ' season is over; this fills again when the new season starts'}`;
    // rank changes: where each ranked wrestler stands now against the last weekly list from before this week
    const base = W.weeks.filter(w=>w <= X.from).at(-1) || W.weeks[0], was = new Map((W.ranks[base] || []).map(r=>[r[0], r]));
    const now = ROWS.filter(r=>r.season===latest && r.ranked);
    const nm = r => wlink(r.id, r.name), girls = r => r.g==='F' ? ' girls' : '';
    const ones = now.filter(r=>r.rank===1 && !(was.get(r.id) && was.get(r.id)[9]===1 && was.get(r.id)[5]===r.wt)).sort((a,b)=>(a.g==='F')-(b.g==='F') || a.wt-b.wt).slice(0, 8)
      .map(r=>{ const p = was.get(r.id); return `<li>${badge(r.tid, r.team, 'm')}<span>${nm(r)}<span class="sub">${r.wt} lbs${girls(r)} · ${esc(r.team)} · ${p ? (p[5]===r.wt ? `was #${p[9]}` : `was #${p[9]} at ${p[5]}`) : 'was outside the top 30'}</span></span></li>`; });
    const up = now.map(r=>[r, was.get(r.id)]).filter(([r,p])=>p && p[5]===r.wt && r.rank<=20 && p[9]-r.rank>=3).sort((a,b)=>(b[1][9]-b[0].rank)-(a[1][9]-a[0].rank) || a[0].rank-b[0].rank).slice(0, 6)
      .map(([r,p])=>`<li>${badge(r.tid, r.team, 'm')}<span>${nm(r)} <span class="up">▲ ${p[9]-r.rank}</span><span class="sub">now #${r.rank} at ${r.wt}${girls(r)} · ${esc(r.team)}</span></span></li>`);
    const ups = ((X && X.upsets) || []).slice(0, 6);
    const added = X ? EVENTS.filter(e=>e.season===latest && e.date>=X.from && e.date<=X.to).sort((a,b)=>b.bouts-a.bouts).slice(0, 6) : [];
    const card = (h, link, rows, none) => `<div class="card"><div class="card-head"><h2>${h}</h2>${link||''}</div>${rows.length ? `<ul>${rows.join('')}</ul>` : `<p class="none">${none}</p>`}</div>`;
    $('h-wkbody').innerHTML =
      card('New No. 1s', `<a class="lnk" href="#rankings">Rankings</a>`, ones, 'No weight changed hands this week.')
      + card('Biggest climbs', `<a class="lnk" href="#rankings">Rankings</a>`, up, 'No big moves in the top 20 this week.')
      + card('Biggest upsets', '', ups.map(u=>{ const wr = (BYID.get(u[2])||[]).find(r=>r.season===latest); return `<li>${wr ? badge(wr.tid, wr.team, 'm') : '<span class="wk-sp"></span>'}<span>${hasProfile(u[2]) ? `<a class="lnk plain" href="${hW(u[2])}">${esc(u[5])}</a>` : esc(u[5])} over ${hasProfile(u[3]) ? `<a class="lnk plain" href="${hW(u[3])}">${esc(u[6])}</a>` : esc(u[6])}<span class="sub">${wr ? esc(wr.team) + ' · ' : ''}${u[1] ? u[1] + ' lbs · ' : ''}given a ${u[0]}% chance · ${EVBY.has(u[4]) ? `<a href="${hE(u[4])}">${esc(evName(EVBY.get(u[4]).name))}</a>` : ''}</span></span></li>`; }), 'No big upsets this week.')
      + card('Results added', `<a class="lnk" href="#events">All events</a>`, added.map(e=>{ const h = e.host != null ? (TBY.get(e.host)||[]).at(-1) : null; return `<li>${postS(e) ? `<span class="sb lb m" aria-hidden="true">${OHSAA_IMG}</span>` : h ? badge(e.host, h.name, 'm') : '<span class="wk-sp"></span>'}<span>${elink(e.eid, e.name)}<span class="sub">${fmtShort(e.date)} · ${e.bouts.toLocaleString()} bouts${townOf(e) ? ' · ' + esc(townOf(e)[0]) : ''}</span></span></li>`; }), 'No new results this week.');
    sec.hidden = false;
  }

  /* ================= stat leaders ================= */
  const LDR = {}; const loadLeaders = s => LDR[s] ||= fetch('leaders/'+s+'.json').then(r=>r.ok?r.json():null).catch(()=>null);
  async function renderLeaders(){
    const seasons = (META.leader_seasons || []).slice().reverse();
    if (!seasons.length){ $('l-out').innerHTML = '<p class="note">Stat leaders are not available yet.</p>'; return; }
    if (!seasons.includes(S.lSeason)) S.lSeason = seasons[0];
    S.lG ||= 'M';
    seasonOpts($('l-season'), seasons, S.lSeason);
    $('l-season').onchange = e => { S.lSeason = e.target.value; history.replaceState(null,'',`#leaders/${S.lSeason}/${S.lG}`); renderLeaders(); };
    seg($('l-gender'), [['M','Boys'],['F','Girls']], S.lG, v=>{ S.lG = v; S.lWt = null; history.replaceState(null,'',`#leaders/${S.lSeason}/${S.lG}`); renderLeaders(); });
    $('l-out').innerHTML = '<p class="loading">Loading…</p>';
    const want = S.lSeason, D = await loadLeaders(want); if (want !== S.lSeason || $('v-leaders').hidden) return;
    const G = D && D[S.lG]; if (!G || !G.pins){ $('l-out').innerHTML = '<p class="note">No results for this season.</p>'; $('l-wts').innerHTML = ''; return; }
    const wts = [...new Set(Object.values(G).flatMap(c=>Object.keys(c.wt)))].map(Number).sort((a,b)=>a-b);
    if (S.lWt != null && !wts.includes(S.lWt)) S.lWt = null;
    $('l-wts').innerHTML = `<button type="button" data-w="" aria-pressed="${S.lWt==null}">All weights</button>` + wts.map(w=>`<button type="button" data-w="${w}" aria-pressed="${w===S.lWt}">${w}</button>`).join('');
    $('l-wts').onclick = e => { const b = e.target.closest('button'); if (!b) return; S.lWt = b.dataset.w ? +b.dataset.w : null; renderLeaders(); };
    const mmss = x => `${Math.floor(x/60)}:${String(x%60).padStart(2,'0')}`;
    const CATS = [['pins','Most pins','Pins', x=>x], ['fast','Fastest pins','Time', mmss], ['tf','Most tech falls','Tech falls', x=>x], ['wins','Most wins','Wins', x=>x], ['streak','Longest win streaks','In a row', x=>x]];
    $('l-out').innerHTML = CATS.map(([k, title, unit, fmt]) => { const rows = (S.lWt == null ? G[k].all : G[k].wt[S.lWt]) || [];
      return `<div class="card"><div class="card-head"><h2>${title}</h2><span class="sub">${S.lWt == null ? 'statewide, top ' + rows.length : S.lWt + ' lbs'}</span></div>
        <table><thead><tr><th class="num">#</th><th>Wrestler</th><th class="num">${unit}</th></tr></thead><tbody>${rows.map((r,i)=>`<tr><td class="num">${i && rows[i-1][5]===r[5] ? '' : i+1}</td>
          <td class="who"><div class="whoflex">${badge(r[3], r[2], 's')}<div>${wlink(r[0], r[1])}<div class="meta">${[esc(r[2]), S.lWt == null ? r[4] + ' lbs' : '', `${r[6]}-${r[7]}`,
            k==='fast' && r[8] ? `vs ${esc(r[8][1])}${EVBY.has(r[8][2]) ? `, <a href="${hE(r[8][2])}">${esc(evName(EVBY.get(r[8][2]).name))}</a>` : ''}` : ''].filter(Boolean).join(' · ')}</div></div></div></td>
          <td class="v">${fmt(r[5])}</td></tr>`).join('') || empty(3, 'None in our results.')}</tbody></table></div>`; }).join('');
  }

  /* ================= youth =================
     Events run on wrestle.live at youth level: brackets and win-loss records only. Youth bouts are never rated, so
     there is nothing here from the ratings: no ranks, odds, compare or leaders. Clubs are their own pages, apart from
     school teams. #youth/e/<event>[/<bracket>] · #youth/w/<youth id> · #youth/c/<club id> */
  let YIDX = null, YNOW = null; const YEV = {};
  const loadY = () => YIDX ||= fetch('youth/index.json').then(r=>r.ok?r.json():null).catch(()=>null).then(j=>{ j = j || {events:[], clubs:[], w:[]};
    j.ev = new Map(j.events.map(e=>[e.id, e])); j.club = new Map(j.clubs.map(c=>[c[0], c])); j.wr = new Map(j.w.map(w=>[w[0], w])); j.rid = new Map(j.w.filter(w=>w[3]).map(w=>[w[3], w[0]]));
    return YNOW = j; });
  const loadYE = id => YEV[id] ||= fetch(`youth/${encodeURIComponent(id)}.json`).then(r=>r.ok?r.json():null).catch(()=>null);
  // youth events, clubs and wrestlers matching a search: every word of the query must be in the name (or the event's place)
  const findY = q => { const ws = sNorm(q).split(' ').filter(Boolean), I = YNOW; if (!I || !ws.length || sNorm(q).length < 3) return {yc: [], ye: [], yw: []};
    const hit = x => { const k = ' ' + sNorm(x); return ws.every(w => k.includes(' ' + w)); };
    return {ye: I.events.filter(y => hit([y.name, y.where, y.host].join(' '))), yc: I.clubs.filter(c => hit(c[1])), yw: I.w.filter(w => hit(w[1]))}; };
  const hYE = (id, n) => `#youth/e/${encodeURIComponent(id)}` + (n ? `/${n}` : ''), hYW = id => `#youth/w/${id}`, hYC = id => `#youth/c/${id}`;
  const Y_TAG = '<span class="et et-y">Youth</span>';
  const WL_MARK = '<span class="wlm" role="img" aria-label="Run on wrestle.live">wrestle<b>.live</b></span>';     // after the name of an event whose results came from wrestle.live
  let WLI_NOW = null;
  const Y_NOTE = `<div class="card y-note">${Y_TAG}<p>Youth results are a record, not a ranking. Youth wrestlers get their brackets and win-loss records here; there are no ratings, rankings or odds for youth.</p></div>`;
  const yLbs = w => w[4] != null && w[5] != null ? `${w[4]}–${w[5]} lbs` : '';
  function yHero(eye, name, ini, lede, acts, tiles){        // wrestler and club pages: the same hero and tiles as school pages
    $('y-head').hidden = true; $('y-hero').hidden = false; $('y-eye').after($('y-name'));
    $('y-eye').textContent = eye; $('y-name').textContent = name; $('y-mono').textContent = ini; $('y-lede').innerHTML = lede; $('y-hacts').innerHTML = acts || '';
    $('y-tiles').hidden = !tiles; $('y-tiles').innerHTML = (tiles || []).map(([k, v, t]) => `<div class="card tile"><div class="k">${k}</div><div class="v${String(v).length > 8 ? ' small' : ''}">${esc(v)}</div><div class="s">${t}</div></div>`).join(''); }
  function yHead(chips, name, sub, acts, tiles){
    $('y-hero').hidden = true; $('y-tiles').hidden = true; $('y-head').hidden = false; $('y-chips').after($('y-name'));
    $('y-chips').hidden = false; $('y-chips').innerHTML = chips; $('y-name').textContent = name; $('y-sub').innerHTML = sub;
    $('y-acts').hidden = !acts; $('y-acts').innerHTML = acts || '';
    $('y-stats').hidden = !tiles; $('y-stats').innerHTML = (tiles || []).map(([b, t]) => `<div><b>${b}</b><span>${t}</span></div>`).join(''); }
  async function renderYouth(){
    const [kind, a, b] = S.y || [], out = $('y-out'), key = (S.y || []).join('/');
    const gone = msg => { yHead(`<span class="k">Youth</span>`, 'Youth results', '', '', null); out.innerHTML = `<p class="note">${msg} <a href="#events">All events</a></p>`; };
    const I = await loadY(); if (key !== (S.y || []).join('/')) return;
    if (kind === 'e') return yEvent(I, a, b ? +b : null, key);
    if (kind === 'w') return yWrestler(I, +a, key);
    if (kind === 'c') return yClub(I, +a, key);
    gone('That youth page was not found.');
  }
  const yName = (X, w) => { const x = X.w[w]; return x ? `<a class="lnk" href="${hYW(x[3])}">${esc(x[0])}</a>` : '?'; };
  const yIni = n => String(n || '').replace(/\s+Youth Wrestling( Club)?$/i, '').split(/[\s-]+/).filter(x => /^[A-Za-z]/.test(x)).slice(0, 2).map(x => x[0]).join('').toUpperCase();
  // one bout as a row that opens the bout window: who won, the result, and what opening it shows
  const yBout = (X, x, me) => { const won = me ? me.has(x[14]) : true, o = me ? (me.has(x[8]) ? x[9] : x[8]) : (x[14] === x[8] ? x[9] : x[8]);
    const who = me ? `${won ? 'over' : 'to'} ${o ? `<b>${esc(X.w[o]?.[0] || '?')}</b>` : '?'} <span class="sub">${o ? yClubOf(X, o) : ''}</span>`
      : `<b>${esc(X.w[x[14]]?.[0] || '?')}</b> <span class="sub">${yClubOf(X, x[14])}</span> over <b>${o ? esc(X.w[o]?.[0] || '?') : '?'}</b> <span class="sub">${o ? yClubOf(X, o) : ''}</span>`;
    return `<button type="button" class="y-bt" data-wlb="${esc(x[0])}">${me ? `<span class="wl ${won ? 'W' : 'L'}" aria-hidden="true">${won ? 'W' : 'L'}</span><span class="sr">${won ? 'Won' : 'Lost'}</span>` : '<span></span>'}
      <span class="who">${who}</span><span class="rs"><b>${wlRes(x) || 'Result'}</b><span>${x[20] === 'tablet' ? 'Play-by-play' : 'Bout details'} ›</span></span></button>`; };
  const yClubOf = (X, w) => { const x = X.w[w], t = x && x[2] != null && X.teams[x[2]]; return t ? esc(t[0]) : 'Unattached'; };
  async function yEvent(I, id, n, key){
    const out = $('y-out'), E = I.ev.get(id);
    if (!E){ yHead(`<span class="k">Youth</span>`, 'Youth results', '', '', null); out.innerHTML = `<p class="note">That youth event is not here. <a href="#events">All events</a></p>`; return; }
    const today = new Date().toISOString().slice(0,10), N = v => v.toLocaleString();
    const head = X => yHead(`<span class="gold">Official results</span>${wlRunChip(X && X.until >= today ? X.live : null)}<span class="k">Youth · ${esc(E.season)}</span>`, E.name,
      [fmtDate(E.date), esc(E.where)].filter(Boolean).join(' · '),
      `<button type="button" class="btn" id="y-share">Share results</button>${X && X.until >= today ? `<a class="lnk" href="${esc(X.live)}" target="_blank" rel="noopener">Event page on wrestle.live<span aria-hidden="true"> ↗</span>${wlTab}</a>` : ''}`,
      [[N(E.nb), `bracket${E.nb===1?'':'s'}${E.ng ? ` · ${E.ng} girls bracket${E.ng===1?'':'s'}` : ''}`], [N(E.nw), 'wrestlers'], [N(E.nc), 'clubs'], [N(E.bouts), 'bouts']]);
    head(null); out.innerHTML = '<p class="loading">Loading brackets…</p>';
    const X = await loadYE(id); if (key !== (S.y || []).join('/')) return;
    if (!X){ out.innerHTML = `<p class="note">This event's brackets could not be loaded. Try again in a minute.</p>`; return; }
    head(X); $('y-share').onclick = () => shareThis($('y-share'), 'Share results');
    const open = ev => { const t = ev.target.closest('[data-wlb]'); if (t) wlOpenBout({eid: 'y/' + id}, X, t.dataset.wlb); };
    const W = X.weights, card = (w, i) => `<div class="card y-b"><h3><a href="${hYE(id, i + 1)}">${esc(w[1])}</a><span>${yLbs(w)}${w[6] ? `${yLbs(w) ? ' · ' : ''}<b class="y-g">Girls</b>` : ''}</span></h3>
      <ol>${w[7].map(r=>`<li><b>${r[1] ?? ''}</b><span>${yName(X, r[0])}<span class="sub">${yClubOf(X, r[0])}</span></span><span class="num">${r[2]}–${r[3]}</span></li>`).join('')}</ol>
      <a class="y-more" href="${hYE(id, i + 1)}">Every bout and play-by-play ›</a></div>`;
    if (n && W[n - 1]){ const w = W[n - 1], ids = w[7].map(r=>r[0]), bs = X.bouts.filter(x => x[1] === w[0] && x[14] && x[15] !== 'bye');
      // every bracket is in the picker; previous and next sit either side
      const beat = new Map(bs.map(x => [x[14] + '>' + (x[14] === x[8] ? x[9] : x[8]), x]));
      const ini = x => (X.w[x]?.[0] || '?').split(/\s+/).map(p=>p[0]).join('').slice(0,3).toUpperCase();
      const grid = ids.length <= 8 ? `<div class="scroll" style="padding:0 16px 14px"><div class="y-x" style="grid-template-columns:minmax(120px,1.4fr) repeat(${ids.length},minmax(40px,1fr))"><span></span>${ids.map(x=>`<span class="h">${esc(ini(x))}</span>`).join('')}
        ${ids.map(r=>`<span class="n">${esc(X.w[r]?.[0] || '?')}</span>` + ids.map(c=> r===c ? '<span class="d"></span>' : beat.has(r+'>'+c) ? '<span class="w">W</span>' : beat.has(c+'>'+r) ? '<span class="l">L</span>' : '<span></span>').join('')).join('')}</div></div>` : '';
      const rounds = new Map(); for (const x of bs){ const k = x[19] ? ord(x[19]) + ' place' : x[6] || (x[5] ? 'Round ' + x[5] : 'Bouts'); (rounds.get(k) || rounds.set(k, []).get(k)).push(x); }
      const lab = (x, k) => `${esc(x[1])}${yLbs(x) ? ' · ' + yLbs(x) : ''}${x[6] ? ' · Girls' : ''}`;
      out.innerHTML = `<nav class="y-nav" aria-label="Brackets"><a class="btn ghost" href="${hYE(id)}">All ${W.length} brackets</a>
        ${n > 1 ? `<a class="btn ghost" href="${hYE(id, n - 1)}" aria-label="Previous: ${esc(W[n - 2][1])}">‹ ${esc(W[n - 2][1])}</a>` : ''}
        <label class="y-pick"><span class="sr">Bracket</span><select id="y-sel">${W.map((x, k) => `<option value="${k + 1}"${k === n - 1 ? ' selected' : ''}>${lab(x, k)}</option>`).join('')}</select></label>
        ${n < W.length ? `<a class="btn ghost" href="${hYE(id, n + 1)}" aria-label="Next: ${esc(W[n][1])}">${esc(W[n][1])} ›</a>` : ''}
        <span class="sub">${n} of ${W.length}</span></nav>
        <div class="grid2"><div class="card"><div class="card-head"><h2>${esc(w[1])}${yLbs(w) ? ' · ' + yLbs(w) : ''}</h2><span class="sub">${w[6] ? 'Girls · ' : ''}${ids.length} wrestlers</span></div>
          <table><thead><tr><th>Pl</th><th>Wrestler</th><th class="num">Record</th></tr></thead><tbody>${w[7].map(r=>`<tr><td class="rk">${r[1] ?? ''}</td><td class="who y-who">${yName(X, r[0])}<span class="sub">${yClubOf(X, r[0])}</span></td><td class="num">${r[2]}–${r[3]}</td></tr>`).join('')}</tbody></table>
          ${grid ? `<p class="y-rd" style="margin-bottom:8px">Who beat whom</p>${grid}` : ''}</div>
        <div class="card"><div class="card-head"><h2>Bouts</h2><span class="sub">${bs.length} bout${bs.length===1?'':'s'} · pick a bout for its play-by-play</span></div>
          ${[...rounds].map(([k, list]) => `<p class="y-rd">${esc(k)}</p>` + list.map(x => yBout(X, x, null)).join('')).join('') || '<p class="loading">No bouts were wrestled in this bracket.</p>'}</div></div><div style="margin-top:16px">${Y_NOTE}</div>`;
      $('y-sel').onchange = ev => { location.hash = hYE(id, +ev.target.value); };
      out.onclick = open; const q = new URLSearchParams(location.search).get('bout'); if (q && X.bouts.some(x=>x[0]===q)) wlOpenBout({eid: 'y/' + id}, X, q);
      return; }
    // all brackets, then the clubs
    // one row per club (two spellings on wrestle.live are one club here)
    const cOf = x => x && x[2] != null && X.teams[x[2]] ? X.teams[x[2]][1] : null;
    const agg = new Map(); for (const x of Object.values(X.w)){ const k = cOf(x); if (k == null) continue; const c = agg.get(k) || agg.set(k, {name: X.teams[x[2]][0], cid: k, ids: new Set(), ch: 0, t2: 0, w: 0, l: 0}).get(k); c.ids.add(x[3]); }
    for (const w of W) for (const r of w[7]){ const x = X.w[r[0]], c = agg.get(cOf(x)); if (!c) continue; c.w += r[2]; c.l += r[3]; if (r[1] === 1) c.ch++; if (r[1] != null && r[1] <= 2) c.t2++; }
    const clubs = [...agg.values()].sort((p, q) => q.ch - p.ch || q.t2 - p.t2 || q.ids.size - p.ids.size || p.name.localeCompare(q.name));
    const anyG = W.some(w=>w[6]);
    out.innerHTML = `${Y_NOTE}<div class="y-ctl">${anyG ? `<div class="seg" role="group" aria-label="Brackets" id="y-f"></div>` : ''}<label>Find a wrestler or club <input type="search" id="y-q" placeholder="Name or club" autocomplete="off"></label></div>
      <div class="card-head" style="padding:0 0 10px"><h2>Brackets and place winners</h2><span class="sub" id="y-n"></span></div><div class="y-grid" id="y-grid"></div>
      <div class="card" style="margin-bottom:20px"><div class="card-head"><h2>Clubs</h2><span class="sub">Youth events have no team score, so clubs are listed by bracket champions</span></div>
        <div class="scroll"><table><thead><tr><th>#</th><th>Club</th><th class="num">Wrestlers</th><th class="num">Champions</th><th class="num lg">Top 2</th><th class="num lg">Bouts W–L</th></tr></thead><tbody>
        ${clubs.map((c, i) => `<tr><td class="rk">${i + 1}</td><td><a class="lnk" href="${hYC(c.cid)}">${esc(c.name)}</a></td><td class="num">${c.ids.size}</td><td class="num"><b>${c.ch || ''}</b></td><td class="num lg">${c.t2 || ''}</td><td class="num lg">${c.w}–${c.l}</td></tr>`).join('')}</tbody></table></div></div>
      <section class="evb-built" aria-label="About this page"><div><b>This page built itself.</b><p>${esc(E.name)} ran on wrestle.live. When the last bout ended, every bracket and result landed here, and they stay here.</p></div>
        <a class="btn" href="https://wrestle.live/" target="_blank" rel="noopener">Run your tournament on wrestle.live${wlTab}</a></section>`;
    const draw = () => { const q = sNorm($('y-q').value), f = S.yF || 'all';
      const list = W.map((w, i) => [w, i]).filter(([w]) => (f === 'all' || w[6]) && (!q || w[7].some(r => sNorm((X.w[r[0]]?.[0] || '') + ' ' + yClubOf(X, r[0])).includes(q))));
      $('y-grid').innerHTML = list.map(([w, i]) => card(w, i)).join('') || '<p class="loading">No bracket matches.</p>';
      $('y-n').textContent = `${list.length} of ${W.length} brackets`; };
    const segF = () => seg($('y-f'), [['all','All brackets'],['girls','Girls brackets']], S.yF || 'all', v => { S.yF = v; segF(); draw(); });
    if (anyG) segF(); else S.yF = 'all';
    $('y-q').oninput = draw; draw(); out.onclick = null;
  }
  async function yWrestler(I, yid, key){
    const out = $('y-out'), p = I.wr.get(yid);
    if (!p){ yHead(`<span class="k">Youth wrestler</span>`, 'Youth wrestler', '', '', null); out.innerHTML = `<p class="note">That youth wrestler is not here. <a href="#search">Search</a></p>`; return; }
    const club = p[2] != null ? I.club.get(p[2]) : null, evs = p[4], w = evs.reduce((s, e) => s + e[3], 0), l = evs.reduce((s, e) => s + e[4], 0), titles = evs.filter(e => e[2] === 1).length;
    yHero('Youth wrestler', p[1], yIni(p[1]), [club ? `<a href="${hYC(club[0])}">${esc(club[1])}</a>` : 'Unattached', p[3] && hasProfile(p[3]) ? `<a href="${hW(p[3])}">School record</a>` : ''].filter(Boolean).join(' · '),
      `<button type="button" class="btn ghost" id="y-share">Share</button>`,
      [['Record', `${w}-${l}`, 'youth bouts'], ['Events', evs.length, 'run on wrestle.live'], ['Bracket titles', titles, titles === 1 ? 'first place in a bracket' : 'first places in a bracket']]);
    $('y-share').onclick = () => shareThis($('y-share'), 'Share');
    out.innerHTML = Y_NOTE + '<p class="loading">Loading results…</p>';
    const XS = await Promise.all(evs.map(e => loadYE(e[0]))); if (key !== (S.y || []).join('/')) return;
    out.innerHTML = Y_NOTE + evs.map((e, i) => { const X = XS[i], E = I.ev.get(e[0]); if (!X || !E) return '';
      const me = new Set(Object.entries(X.w).filter(([, x]) => x[3] === yid).map(([k]) => k)), wi = X.weights.findIndex(x => x[1] === e[1] && x[7].some(r => me.has(r[0]))), wt = X.weights[wi];
      const bs = wt ? X.bouts.filter(x => x[1] === wt[0] && x[14] && x[15] !== 'bye' && (me.has(x[8]) || me.has(x[9]))) : [];
      const bw = bs.filter(x => me.has(x[14])).length;
      return `<div class="card" style="margin-bottom:16px" data-ev="${esc(e[0])}"><div class="group-h"><span><a class="lnk" href="${hYE(e[0])}">${esc(E.name)}</a></span><span class="sub">${fmtShort(E.date)}, ${E.date.slice(0,4)} · ${Y_TAG} · ${bw}-${bs.length - bw}</span></div>
        <div class="group-h" style="background:none"><span class="sub"><a href="${hYE(e[0], wi + 1)}">${esc(e[1])}${wt && yLbs(wt) ? ' · ' + yLbs(wt) : ''}</a>${e[2] ? ` · ${ord(e[2])} of ${e[5]}` : ''}</span><span class="sub">Pick a bout for its play-by-play</span></div>
        ${bs.map(x => yBout(X, x, me)).join('') || '<p class="loading">No bouts wrestled.</p>'}</div>`; }).join('');
    out.onclick = ev => { const t = ev.target.closest('[data-wlb]'); if (!t) return; const id = t.closest('[data-ev]').dataset.ev, X = XS[evs.findIndex(e => e[0] === id)]; if (X) wlOpenBout({eid: 'y/' + id}, X, t.dataset.wlb); };
  }
  function yClub(I, cid, key){
    const out = $('y-out'), c = I.club.get(cid);
    if (!c){ yHead(`<span class="k">Youth club</span>`, 'Youth club', '', '', null); out.innerHTML = `<p class="note">That youth club is not here. <a href="#search">Search</a></p>`; return; }
    const ws = I.w.filter(w => w[2] === cid).map(w => ({id: w[0], name: w[1], w: w[4].reduce((s, e) => s + e[3], 0), l: w[4].reduce((s, e) => s + e[4], 0), n: w[4].length, best: Math.min(...w[4].map(e => e[2] ?? 99)), ev: w[4]}))
      .sort((p, q) => (q.w - q.l) - (p.w - p.l) || q.w - p.w || p.name.localeCompare(q.name));
    const evIds = [...new Set(ws.flatMap(w => w.ev.map(e => e[0])))].filter(id => I.ev.has(id)).sort((p, q) => I.ev.get(q).date.localeCompare(I.ev.get(p).date));
    const W = ws.reduce((s, w) => s + w.w, 0), L = ws.reduce((s, w) => s + w.l, 0), ch = ws.reduce((s, w) => s + w.ev.filter(e => e[2] === 1).length, 0);
    yHero('Youth club', c[1], yIni(c[1]), 'Youth wrestling club · results from events run on wrestle.live', '',
      [['Wrestlers', ws.length, 'with youth results'], ['Events', evIds.length, 'run on wrestle.live'], ['Bracket champions', ch, 'first places'], ['Record', `${W}-${L}`, 'youth bouts']]);
    out.innerHTML = `${Y_NOTE}<div class="card" style="margin-bottom:16px"><div class="card-head"><h2>Events</h2></div><div class="results">${evIds.map(id => { const E = I.ev.get(id), n = ws.filter(w => w.ev.some(e => e[0] === id)).length;
        return `<a href="${hYE(id)}"><span><strong>${esc(E.name)}</strong> ${Y_TAG}</span><span class="sub">${fmtDate(E.date)} · ${n} wrestler${n===1?'':'s'}</span></a>`; }).join('')}</div></div>
      <div class="card"><div class="card-head"><h2>Youth wrestlers</h2><span class="sub">${ws.length} wrestlers · by record · no ranks or ratings</span></div>
        <div class="scroll"><table><thead><tr><th>Wrestler</th><th class="num">Record</th><th class="num">Events</th><th class="num">Best finish</th></tr></thead><tbody>
        ${ws.map(w => `<tr><td class="who"><a class="lnk" href="${hYW(w.id)}">${esc(w.name)}</a></td><td class="num">${w.w}–${w.l}</td><td class="num">${w.n}</td><td class="num">${w.best < 99 ? ord(w.best) : ''}</td></tr>`).join('')}</tbody></table></div></div>`;
    out.onclick = null;
  }

  /* ================= event preview =================
     An event on wrestle.live that has not finished: the teams entered, by their rank here, and at each weight the
     wrestlers to beat. Entries come from wrestle.live once coaches have entered wrestlers; until then the page works
     from each entered team's lineup here (this season's so far, or the projection). */
  async function renderPreview(){
    const id = S.pvId, out = $('pv-out');
    $('pv-name').textContent = 'Event preview'; $('pv-sub').textContent = ''; for (const k of ['pv-mono','pv-chips','pv-acts']) $(k).hidden = true; out.innerHTML = '<p class="loading">Loading the event from wrestle.live…</p>';
    const U = await loadWLUp(); if (id !== S.pvId || $('v-preview').hidden) return;
    const u = U.find(x=>x.id === id);
    if (!u){ out.innerHTML = WL_DOWN ? `<p class="note">wrestle.live did not answer just now, so this event can't be shown. Try again in a minute.</p>`
      : `<p class="note">This event is not on wrestle.live's list of coming events. It may have finished: look for its results on the <a href="#events">Events</a> page.</p>`; return; }
    $('pv-name').textContent = u.name;
    { await loadSchools(); if (id !== S.pvId) return;
      const hs = [u.host, u.where].map(x=>x.toLowerCase()), h = u.teams.filter(t=>t.tid != null && hs.some(x=>x === t.name.toLowerCase() || x.startsWith(t.name.toLowerCase() + ' ')))
        .sort((a,b)=>b.name.length - a.name.length)[0];
      wlLogo($('pv-mono'), h ? h.tid : null, h ? h.name : ''); }
    { const past = u.sid != null ? SERIES.get(u.sid).slice().sort((a,b)=>b.date.localeCompare(a.date))[0] : null;
      $('pv-eyebrow').textContent = `${u.st==='live' ? 'Live now' : u.st==='final' ? 'Finished' : 'Coming up'} · ${wlKind(u) || 'on wrestle.live'}`;
      const today = new Date(Date.now() - 6*3600e3).toISOString().slice(0,10), nT = u.teams.length;
      $('pv-chips').hidden = false;
      $('pv-chips').innerHTML = `${wlRunChip(u.url)}${u.st==='live' ? '<span class="ol live">Live now</span>' : u.st==='final' ? '<span class="ol">Finished</span>' : u.d0===today ? '<span class="ol">Today</span>' : ''}${wlKind(u) ? `<span class="k">${esc(wlKind(u))}</span>` : ''}`;
      $('pv-sub').innerHTML = [wlDates(u), esc(u.where), nT ? `${nT} ${u.lv.length && u.lv.every(x=>x==='youth') ? 'club' : 'team'}${nT===1?'':'s'} entered` : '', past ? `<a href="${hE(past.eid)}">${esc(past.season)} results</a>` : ''].filter(Boolean).join(' · ');
      $('pv-acts').hidden = false;
      $('pv-acts').innerHTML = `<a class="btn go" href="${esc(u.url)}" target="_blank" rel="noopener">${u.st==='live' ? 'Live brackets and results' : u.st==='final' ? 'Results' : 'Brackets and registration'}<span aria-hidden="true"> ↗</span>${wlTab}</a><span class="sub">on wrestle.live</span>`; }
    const ms = u.lv.length === 1 && u.lv[0] === 'ms', g = u.g === 'girls' ? 'F' : 'M', latest = META.seasons.at(-1);
    if (u.st === 'final'){ const I = await loadY(); if (id !== S.pvId) return; if (I.ev.has(u.id)){ location.hash = hYE(u.id); return; } }
    if (u.st !== 'final' && u.lv.length && u.lv.every(x => x === 'youth')){
      const R = u.res ? await fetch(u.res, window.AbortSignal && AbortSignal.timeout ? {signal: AbortSignal.timeout(8000)} : {}).then(r=>r.ok?r.json():null).catch(()=>null) : null; if (id !== S.pvId) return;
      const cnt = new Map(); if (R && Array.isArray(R.wrestlers)) for (const w of R.wrestlers) if (w.status !== 'scratched') cnt.set(w.teamId, (cnt.get(w.teamId) || 0) + 1);
      const names = R && Array.isArray(R.teams) && cnt.size ? R.teams.filter(t => cnt.has(t.id) && !/^(unattached|independent|none)$/i.test(String(t.name||'').trim())).map(t => [String(t.name), cnt.get(t.id)]) : u.teams.map(t => [t.name, null]);
      const total = [...cnt.values()].reduce((s, x) => s + x, 0);
      out.innerHTML = `<div class="card y-note">${Y_TAG}<p>Youth brackets are made by weight on the day, and youth wrestlers have no ratings, so there is no projection for this event. Results land here when it is final: every bracket and each wrestler's record.</p></div>
        <div class="card"><div class="card-head"><h2>Clubs entered</h2><span class="sub">${names.length} club${names.length===1?'':'s'}${total ? ` · ${total} wrestlers entered` : ''}</span></div>
        ${names.length ? `<div class="results">${names.sort((a,b)=>(b[1]||0)-(a[1]||0) || a[0].localeCompare(b[0])).map(([n, c])=>`<div style="display:flex;justify-content:space-between;gap:12px;padding:11px 16px;border-bottom:1px solid var(--line)"><strong>${esc(n)}</strong><span class="sub">${c ?? ''}</span></div>`).join('')}</div>` : '<p class="loading">No clubs are entered yet.</p>'}</div>`;
      return; }
    if (u.st === 'final'){ out.innerHTML = `<p class="note">This event has finished. Its results are on wrestle.live now and will be added here, with ratings, at the next update.</p>`; return; }
    // the pool of wrestlers: entries from wrestle.live when there are any, else the entered teams' lineups here
    let ent = null;
    if (u.res){ const R = await fetch(u.res, window.AbortSignal && AbortSignal.timeout ? {signal: AbortSignal.timeout(8000)} : {}).then(r=>r.ok?r.json():null).catch(()=>null);
      if (id !== S.pvId) return;
      if (R && Array.isArray(R.wrestlers) && R.wrestlers.length){ const wn = new Map((R.weights||[]).map(w=>[w.id, w])), tn = new Map((R.teams||[]).map(t=>[t.id, t]));
        ent = R.wrestlers.filter(w=>w.status !== 'scratched' && !w.backup).map(w=>{ const rid = +String(w.rankingsId||'').replace(/\D/g,'') || null, wt = wn.get(w.weightId), tm = tn.get(w.teamId);
          const rows = rid ? (ms ? MSBY.get(rid) : BYID.get(rid)) || BYID.get(rid) || MSBY.get(rid) : null, row = rows ? rows.slice().sort((a,b)=>a.season.localeCompare(b.season)).at(-1) : null;
          const ttid = tm && tm.rankingsId ? (+String(MOVED[tm.rankingsId] || tm.rankingsId).replace(/\D/g,'') || null) : null;     // the team as linked on wrestle.live
          return {id: row ? rid : null, name: `${w.first||''} ${w.last||''}`.trim(), team: tm ? tm.name : '', tid: ttid, wt: wt ? +wt.name || wt.name : null, r: row ? row.r : null, rd: row ? row.rd : null,
            rank: row && row.ranked ? row.rank : null, season: row ? row.season : null, gr: Number.isInteger(+w.grade) && +w.grade > 0 && +w.grade < 13 ? +w.grade : null}; }); } }
    const tids = new Set(u.teams.map(t=>t.tid).filter(Boolean));
    let how = '';
    if (!ent){
      if (ms){ const s = (META.ms_seasons||[]).at(-1), best = new Map();      // one wrestler per team and weight: the best rated
        for (const r of MSROWS) if (r.season===s && tids.has(r.tid) && r.g===g && r.wt && (r.gr == null || r.gr < 8)){ const k = r.tid+'|'+r.wt; if (!best.has(k) || r.r > best.get(k).r) best.set(k, r); }
        ent = [...best.values()].map(r=>({id:r.id, name:r.name, team:r.team, tid:r.tid, wt:r.wt, r:r.r, rd:r.rd, rank:null, season:s}));
        how = `No wrestlers are entered yet, so this works from last season's (${s}) 6th and 7th graders on the teams entered, at last season's weights. It will switch to the real entries once coaches enter them on wrestle.live.`; }
      else if (META.sim_next){ const d = await loadSim(META.sim_next); if (id !== S.pvId) return;
        ent = []; for (const t of tids){ const lu = autoLineup(d, t, META.sim_next, g); for (const w of Object.keys(lu)){ const r = d.byId.get(lu[w]); if (r) ent.push({id:r.id, name:r.name, team:simTeamName(d, r.tid), tid:r.tid, wt:+w, r:r.r, rd:r.rd, rank:null, season:META.sim_next, proj:r.proj, gr:r.gr}); } }
        how = (META.sim_live ? `No wrestlers are entered yet, so this works from each entered team's best lineup: this season's results so far, with last season's returners where a wrestler has not wrestled yet.`
          : `No wrestlers are entered yet, so this works from each entered team's projected ${META.sim_next} lineup: last season's returners a year on, at the weights they are likely to move to.`) + ' It will switch to the real entries once coaches enter them on wrestle.live.'; }
      else ent = [];
    } else how = `From the entries on wrestle.live. Ratings are from each wrestler's latest season here; a wrestler we have no results for is seeded last.`;
    // simulate the tournament as Matchups > Tournament does: every weight seeded by rating, played out many times
    { const byName = new Map(u.teams.filter(t=>t.tid != null).map(t=>[t.name, t.tid])); for (const e of ent) if (e.tid == null && byName.has(e.team)) e.tid = byName.get(e.team); }
    const tkey = e => e.tid != null ? e.tid : 'n:' + e.team, tname = new Map(u.teams.map(t=>[t.tid != null ? t.tid : 'n:' + t.name, t]));
    const DEF = 1300, wtsAll = [...new Set(ent.filter(e=>e.wt != null).map(e=>e.wt))].sort((a,b)=>(+a||0)-(+b||0));
    const byW = new Map(wtsAll.map(w=>[w, ent.filter(e=>e.wt===w).map((e,i)=>({id:`${w}:${i}`, tid:tkey(e), r:e.r ?? DEF, rd:e.rd ?? 300, e})).sort((a,b)=>(b.e.r != null)-(a.e.r != null) || b.r-a.r).slice(0,32)]));
    const teamIds = [...new Set([...tname.keys(), ...ent.map(tkey)])], places = teamIds.length >= 9 ? 8 : 6;
    simRand = seeded('pv' + id + ent.length);
    const N = Math.max(1000, Math.min(4000, Math.round(160000 / (Math.max(2, teamIds.length)*14)))), tally = new Map(), teamT = new Map(teamIds.map(t=>[t,{pts:0, win:0, top3:0, n:0}]));
    for (const list of byW.values()) for (const x of list){ tally.set(x.id, {champ:0, top3:0, placed:0, placeSum:0, pts:0}); teamT.get(x.tid).n++; }
    const sims = [...byW.values()].some(l=>l.length >= 2);
    if (sims) for (let n=0; n<N; n++){ const tp = new Map(teamIds.map(t=>[t,0]));
      for (const list of byW.values()){ if (list.length < 2) continue; const pts = runBracket(list, places, tally); for (const x of list) tp.set(x.tid, tp.get(x.tid) + pts.get(x.id)); }
      [...tp.entries()].sort((a,b)=>b[1]-a[1]).forEach(([t,p],i)=>{ const x = teamT.get(t); x.pts += p; if (i===0) x.win++; if (i<3) x.top3++; }); }
    const pc = x => x>=0.995?'>99%':x<0.005?'<1%':Math.round(100*x)+'%';
    const tm = t => { const x = tname.get(t); return {tid: typeof t === 'number' ? t : null, name: x ? x.name : String(t).replace(/^n:/,''), ms: !!(x && x.ms)}; };
    const tlk = t => { const x = tm(t); return `<div class="whoflex">${badge(x.tid, x.name, 's')}<span>${x.tid == null ? esc(x.name) : (x.ms || ms) ? mtlink(x.tid, x.name) : tlink(x.tid, x.name)}</span></div>`; };
    const standings = [...teamT.entries()].map(([t,x])=>({t, n:x.n, pts:x.pts/N, win:x.win/N, top3:x.top3/N})).sort((a,b)=>(b.n>0)-(a.n>0) || b.pts-a.pts || tm(a.t).name.localeCompare(tm(b.t).name));
    const who = e => e.id && hasProfile(e.id) ? wlink(e.id, e.name) : `<span style="font-weight:600">${esc(e.name)}</span>`;
    // the closest pairings among each weight's top four seeds
    const watch = [];
    for (const [w, list] of byW){ const L = list.filter(x=>x.e.r != null).slice(0,4);
      for (let i = 0; i < L.length; i++) for (let j = i+1; j < L.length; j++) if (L[i].tid !== L[j].tid){ const p = pWin(L[i], L[j]); if (Math.abs(p-.5) <= .15) watch.push({w, a:L[i], b:L[j], p, lvl:L[i].r+L[j].r}); } }
    watch.sort((x,y)=>y.lvl-x.lvl);
    const draw = () => { if (!wtsAll.includes(S.pvWt)) S.pvWt = wtsAll[0];
      const list = byW.get(S.pvWt) || [];
      out.innerHTML = `<p class="note" style="margin:10px 0 16px">${how}</p>`
        + (wtsAll.length ? `<div class="grid2 eq">
          <div class="card"><div class="card-head"><h2>Projected team standings</h2><span class="sub">${sims ? N.toLocaleString() + ' simulated tournaments' : ''}</span></div>
            <table><thead><tr><th>#</th><th>Team</th><th class="num">Exp. points</th><th class="num">Team title</th><th class="num lg">Top 3</th></tr></thead><tbody>
            ${standings.map((x,i)=>`<tr><td>${x.n ? i+1 : ''}</td><td class="who">${tlk(x.t)}</td><td class="num">${x.n ? `<strong>${x.pts.toFixed(1)}</strong>` : dash}</td><td class="num">${x.n ? pc(x.win) : dash}</td><td class="num lg">${x.n ? pc(x.top3) : dash}</td></tr>`).join('')}
            </tbody></table></div>
          <div class="card"><div class="card-head"><h2>${esc(S.pvWt)} lbs</h2><span class="sub">${list.length} wrestler${list.length===1?'':'s'} · seeded by rating</span></div>
            <div class="pills" id="pv-wts" role="group" aria-label="Weight class" style="padding:10px 16px 0"></div>
            <table><thead><tr><th class="num">Seed</th><th>Wrestler</th><th class="num">Rating</th><th class="num">Champ</th><th class="num">Top 3</th></tr></thead><tbody>
            ${list.map((x,i)=>{ const t = tally.get(x.id), e = x.e, tx = tm(x.tid); return `<tr${i===0 && e.r!=null?' class="pv-fav"':''}><td class="num">${i+1}</td>
              <td class="who"><div class="whoflex">${badge(tx.tid, tx.name, 's')}<div>${who(e)}<div class="sub" style="font-size:13px;line-height:1.3">${[esc(tx.name), e.gr?ord(e.gr):'', e.rank?'#'+e.rank+' in '+esc(e.season):'', e.proj==='F'?'incoming freshman':''].filter(Boolean).join(' · ')}</div></div></div></td>
              <td class="num">${e.r ?? dash}</td><td class="num">${list.length > 1 ? pc(t.champ/N) : dash}</td><td class="num">${list.length > 1 ? pc(t.top3/N) : dash}</td></tr>`; }).join('') || empty(5, 'No wrestlers at this weight.')}
            </tbody></table></div></div>` : `<div class="card"><div class="card-head"><h2>Teams entered</h2><span class="sub">${u.teams.length} teams</span></div><table><tbody>${standings.map(x=>`<tr><td class="who">${tlk(x.t)}</td></tr>`).join('') || empty(1, 'No teams are entered yet.')}</tbody></table></div>`)
        + (watch.length ? `<div class="card" style="margin-top:16px"><div class="card-head"><h2>Matches to watch</h2><span class="sub">if they meet: the closest pairings among each weight's top four seeds</span></div>
            <table><thead><tr><th class="num">Wt</th><th>Pairing</th><th class="num">Odds</th></tr></thead><tbody>${watch.slice(0, 8).map(x=>{ const A = tm(x.a.tid), B = tm(x.b.tid); return `<tr><td class="num"><strong>${esc(x.w)}</strong></td>
              <td class="who"><div class="whoflex" style="margin-bottom:6px">${badge(A.tid, A.name, 's')}<div>${who(x.a.e)} <span class="sub">${esc(A.name)}${x.a.e.rank?' · #'+x.a.e.rank:''}</span></div></div><div class="whoflex">${badge(B.tid, B.name, 's')}<div>${who(x.b.e)} <span class="sub">${esc(B.name)}${x.b.e.rank?' · #'+x.b.e.rank:''}</span></div></div></td>
              <td class="num">${Math.round(100*x.p)}–${100-Math.round(100*x.p)}</td></tr>`; }).join('')}</tbody></table></div>` : '')
        + (wtsAll.length ? `<p class="note" style="margin-top:14px">Seeds are by rating, not the event's own seeds. Points: 2 per championship win and 1 per consolation win, bonus 2 for a fall, 1.5 for a tech fall, 1 for a major, and placement points for the top ${places}. ${!ms && tids.size >= 2 && META.sim_next ? `To change a lineup, open these teams in <a href="#matchups/t/${META.sim_next}/${g}/${[...tids].filter(t=>TBY.has(t)).slice(0, 40).join(',')}">Matchups</a>.` : ''}</p>` : '');
      if ($('pv-wts')){ $('pv-wts').innerHTML = wtsAll.map(w=>`<button type="button" data-w="${esc(w)}" aria-pressed="${w===S.pvWt}">${esc(w)}</button>`).join('');
        $('pv-wts').onclick = ev => { const b2 = ev.target.closest('button'); if (!b2) return; S.pvWt = wtsAll.find(w=>String(w)===b2.dataset.w); draw(); }; } };
    draw();
  }

  const VIEWS = ['home','rankings','odds','teams','team','events','event','wrestler','sim','search','accuracy','leaders','preview','youth'];
  const TABOF = {team:'teams', event:'events', preview:'events', leaders:'rankings', youth:'events'};
  const inkOn = hex => { const c = hex.replace('#',''); const [r,g,b] = [0,2,4].map(i=>parseInt(c.slice(i,i+2),16)/255).map(x=>x<=0.03928?x/12.92:((x+0.055)/1.055)**2.4);
    const L = 0.2126*r+0.7152*g+0.0722*b, dark = 0.0089;   // relative luminance of #12161C
    return (1.05)/(L+0.05) >= (L+0.05)/(dark+0.05) ? '#FFFFFF' : '#12161C'; };   // pick the higher-contrast ink
  const RENDER = {home:renderHome, rankings:renderRankings, odds:renderOdds, teams:renderTeams, team:renderTeam, events:renderEvents, event:renderEvent,
    wrestler:renderWrestler, sim:renderSim, search:renderSearch, accuracy:renderAccuracy, leaders:renderLeaders, preview:renderPreview, youth:renderYouth};
  // State odds is front and center in February and March (sectionals through state); the rest of the year it moves back
  const POST = (()=>{ const m = new Date().getMonth(); return m===1 || m===2; })();
  (function arrangeNav(){
    const tabs = document.querySelector('.tabs'), odds = $('tab-odds');
    if (POST) tabs.insertBefore(odds, tabs.querySelector('[data-view="teams"]'));
    $('bb-odds').hidden = !POST; $('bb-sim').hidden = POST;
    $('more-odds').hidden = POST; $('more-sim').hidden = !POST;
  })();
  let first = true;
  function route(){
    // a page about an earlier season, a search, or someone not in the current seasons waits for the full history
    if (!FULL && needsAll(RH())){ if (!FULLFAIL){ $('loading').hidden = false; $('loading').textContent = 'Loading earlier seasons…'; } fullReady.then(()=>{ $('loading').hidden = true; route(); }); return; }
    let parts = RH().slice(1).split('/');
    // old addresses still work: #p4p/... -> Rankings (pound-for-pound), #compare/a/b -> Matchups (wrestlers), #sim/... -> Matchups
    if (parts[0]==='p4p'){ S.rview='p4p'; S.div='all'; S.grade='all'; S.showAll=false; if (parts[1]) S.season=parts[1]; if (parts[2]) S.g = parts[2]==='F'?'F':'M'; const hl = parts[3]; parts = ['rankings','p4p']; history.replaceState(null,'','#rankings/p4p'); S.hlP = hl ? +hl : null; }
    if (parts[0]==='compare'){ parts = ['matchups','w', ...parts.slice(1)]; history.replaceState(null,'','#'+parts.join('/')); }
    if (parts[0]==='matchups') parts[0] = 'sim';
    let v = parts[0]; if (!VIEWS.includes(v)) v = 'home';
    const arg = parts.slice(1).filter(x=>x!=='');
    { const id = +arg[0], lost = /^\d+$/.test(arg[0]||'') && ((v==='wrestler' && !hasProfile(id)) || (v==='team' && !TBY.has(id) && !MST.has(id)) || (v==='event' && !EVBY.has(id)));
      if (lost){
        const named = (location.pathname.split('/').filter(Boolean)[1] || '').replace(/-?\d+$/,'').replace(/-/g,' ').trim();
        const giveUp = () => { S.lost = {kind: v==='team' ? 'team' : v, named}; history.replaceState(null, '', '#search/' + encodeURIComponent(named)); route(); };
        if (v==='wrestler'){ $('loading').hidden = false; $('loading').textContent = 'Looking for that wrestler…';
          Promise.all([msLoad, loadWMoved()]).then(([, M]) => { $('loading').hidden = true; let to = M[id], n = 0; while (to != null && !hasProfile(to) && M[to] != null && n++ < 10) to = M[to];
            if (hasProfile(id)) route(); else if (to != null && hasProfile(to)){ history.replaceState(null, '', '#wrestler/' + to); route(); } else giveUp(); });
        } else giveUp();
        return; } }
    if (v==='search' && arg[0] != null){ const q = decodeURIComponent(arg.join('/')); if ($('s-q').value.trim() !== q) $('s-q').value = q; }
    if (v==='rankings' && arg[0]){ S.rview = arg[0]==='MS' ? 'ms' : arg[0]==='p4p' ? 'p4p' : 'w'; S.level = S.rview==='ms' ? 'MS' : 'HS'; }
    S.hl = S.hlP || null; S.hlP = null;
    if (v==='rankings' && arg[0]==='pre'){ S.rview='w'; S.level='HS'; S.season='pre'; S.asof='final'; S.div='all'; S.grade='all'; S.showAll=false; }
    if (v==='rankings' && arg[0]==='movers'){ S.rview='w'; S.level='HS'; const ls = META.seasons.at(-1), wk = ((META.weekly||{})[ls]||[]).at(-1); S.season = ls; S.asof = wk || 'final'; S.goMovers = true; }
    if (v==='rankings' && arg[1]){ S.season = arg[1]; S.g = arg[2]==='F' ? 'F' : 'M'; if (arg[3]) S.wt = +arg[3];
      S.asof = 'final'; S.div = 'all'; S.grade = 'all'; S.hl = arg[4] ? +arg[4] : null;
      const me = S.hl && (S.level==='MS' ? MSBY : BYID).get(S.hl)?.find(r=>r.season===S.season); S.showAll = !!(me && me.rank > 25); }
    if (v==='wrestler') S.wView = arg[1]==='schedule' ? 'schedule' : 'matches';
    if (v==='wrestler' && arg[0] && hasProfile(+arg[0])){ if (+arg[0]!==S.wid){ S.wid=+arg[0]; S.mSeason=null; } S.ca = S.wid; }
    if (v==='team') S.tmView = arg[1]==='history' ? 'history' : 'season';
    if (v==='team' && arg[1]==='history'){ arg.splice(1,1); }
    // #team/<id>/ms: the middle school team (a team with no high school rows is always shown that way)
    if (v==='team'){ const ms = arg[1]==='ms'; if (ms) arg.splice(1,1); S.tmLv = (ms || (arg[0] && !TBY.has(+arg[0]))) && MST.has(+arg[0]) ? 'MS' : 'HS';
      if (S.tmLv==='MS' && +arg[0]!==S.team){ S.team = +arg[0]; S.tmSeason = null; }
      if (S.tmLv==='MS'){ S.tmView = 'season'; if (arg[1]){ S.tmSeason = arg[1]; S.tmG = arg[2]||'M'; } } }
    if (v==='leaders'){ if (arg[0]) S.lSeason = arg[0]; if (arg[1]) S.lG = arg[1]==='F' ? 'F' : 'M'; }
    if (v==='preview'){ S.pvId = arg[0] ? decodeURIComponent(arg[0]) : null; }
    if (v==='youth'){ S.y = arg.slice(0, 3).map(x => decodeURIComponent(x)); }
    if (v==='team' && S.tmLv!=='MS' && arg[0] && TBY.has(+arg[0])){ S.team=+arg[0];
      if (arg[1]){ S.tmSeason=arg[1]; S.tmG=arg[2]||'M'; } else { const recs=(TBY.get(S.team)||[]).slice().sort((a,b)=>b.season.localeCompare(a.season) || (a.g==='M'?-1:1)); /* latest season, boys first when both */ S.tmSeason=recs[0]?.season; S.tmG=recs[0]?.g||'M'; } }
    if (v==='teams' && arg[0] && (META.seasons.includes(arg[0]) || (arg[0]==='pre' && META.pre_season))){ S.tSeason = arg[0]; S.tg = arg[1]==='F' ? 'F' : 'M'; S.tdiv = 'all';
      S.hl = arg[2] ? +arg[2] : null; const me = S.hl && TEAMS.find(t=>t.tid===S.hl && t.season===S.tSeason && t.g===S.tg); S.tAll = !!(me && me.rank > 25); }
    if (v==='events' && arg[0]==='near' && arg[1]){ $('e-near').value = decodeURIComponent(arg[1]); $('e-q').value = '';
      if (arg[2] && META.seasons.includes(arg[2])) S.eSeason = arg[2]; }
    if (v==='event' && arg[0] && EVBY.has(+arg[0]) && +arg[0]!==S.event){ S.event=+arg[0]; S.evWt=null; }
    if (v==='sim' && arg[0]==='w'){ S2.mode = 'w'; if (arg.length>1){ S.ca = hasProfile(+arg[1]) ? +arg[1] : null; S.cb = hasProfile(+arg[2]) ? +arg[2] : null; } }
    else if (v==='sim' && arg[0]){ S2.mode = arg[0]==='t' ? 't' : 'd'; if (arg[1]) S2.season = arg[1]; S2.g = arg[2]==='F' ? 'F' : 'M';
      const ovs = s => Object.fromEntries((s||'').split('.').filter(Boolean).map(x=>x.split('-').map(Number)));
      if (S2.mode==='d'){ const na = arg[3] ? +arg[3] : null, nb = arg[4] ? +arg[4] : null;
        if (na!==S2.a || nb!==S2.b || arg[5] || arg[6]){ S2.a = na; S2.b = nb; S2.baseA = S2.baseB = null; S2.luAOv = ovs(arg[5]); S2.luBOv = ovs(arg[6]); } }
      else { S2.teams = (arg[3]||'').split(',').filter(Boolean).map(Number); if (arg[4]) S2.places = +arg[4] === 6 ? 6 : 8; } }
    for (const s of VIEWS) $('v-'+s).hidden = s!==v;
    document.querySelectorAll('.tabs a, .bottombar a').forEach(a=>{ const on = a.dataset.view===(TABOF[v]||v); if (on) a.setAttribute('aria-current','page'); else a.removeAttribute('aria-current'); if (on && a.offsetParent && a.closest('.tabs')) a.scrollIntoView({block:'nearest', inline:'center'}); });
    $('moresheet').hidden = true; $('morebtn').setAttribute('aria-expanded','false');
    { const inMore = ['events','event','accuracy','search', POST ? 'sim' : 'odds'].includes(v);
      $('morebtn').classList.toggle('here', inMore);
      document.querySelectorAll('.moresheet a').forEach(a=>{ const on = a.getAttribute('href').slice(1)===(v==='event'?'events':v==='sim'?'matchups':v); if (on) a.setAttribute('aria-current','page'); else a.removeAttribute('aria-current'); }); }
    const h1 = $('v-'+v).querySelector('h1');
    const setTitle = () => { if (!$('v-'+v).hidden) document.title = v==='home' ? 'Wrestle Live Rankings · Ohio wrestling' : `${h1.innerText.replace(/\s+/g,' ').trim() || 'Wrestle Live Rankings'} · Wrestle Live Rankings`; };
    Promise.resolve(RENDER[v]()).then(setTitle, setTitle);   // pages that load data finish drawing later
    setTitle();
    if (!first){ window.scrollTo(0,0); if (v==='search') setTimeout(()=>$('s-q').focus(), 50); else h1.focus({preventScroll:true}); }
    if (S.goMovers){ S.goMovers = false; setTimeout(()=>{ const el = $('r-movers'); if (el && !el.hidden) el.scrollIntoView({block:'start'}); }, 700); }
    if (S.hl) setTimeout(()=>{ const el = $('v-'+v).querySelector('.pin'); if (el) el.scrollIntoView({block:'center', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'}); }, 400);
    first = false;
  }

  document.addEventListener('click', e => {
    if (!e.target.closest('.picker')) { $('c-ar').hidden = true; $('c-br').hidden = true; ['sim-ar','sim-br','sim-tr','sim-evr'].forEach(i=>$(i).hidden = true); }
  });
  $('morebtn').onclick = () => { const open = $('moresheet').hidden; $('moresheet').hidden = !open; $('morebtn').setAttribute('aria-expanded', String(open)); if (open) $('moresheet').querySelector('a').focus(); };
  // a tap or click anywhere outside the sheet (and its button) closes it
  document.addEventListener('pointerdown', e => {
    if ($('moresheet').hidden || $('moresheet').contains(e.target) || $('morebtn').contains(e.target)) return;
    $('moresheet').hidden = true; $('morebtn').setAttribute('aria-expanded','false');
  });
  document.addEventListener('keydown', e => { if (e.key==='Escape' && !$('moresheet').hidden){ $('moresheet').hidden = true; $('morebtn').setAttribute('aria-expanded','false'); $('morebtn').focus(); } });
  const toSearch = q => { $('s-q').value = q; go(q.trim() ? '#search/' + encodeURIComponent(q.trim()) : '#search'); };
  function typeahead(inp, box){
    const close = () => { box.hidden = true; box.innerHTML = ''; };
    inp.addEventListener('input', () => {
      const q = inp.value.trim();
      if (sQuery(q).full.length < 3){ close(); return; }
      if (!S_SCH || !PLACES) sReady().then(()=>{ if (inp.value.trim() === q && document.activeElement === inp) inp.dispatchEvent(new Event('input')); });
      if (!WLUP_NOW.length) loadWLUp().then(U=>{ if (U.length && WLUP_NOW !== U){ WLUP_NOW = U; if (inp.value.trim() === q && document.activeElement === inp) inp.dispatchEvent(new Event('input')); } });
      const wall = findW(q, 30), byName = !sSchool(sQuery(q)) && wall.some(r => sHit(sQuery(q), r._n ??= sNorm(r.name))), ws = wall.filter(r=>!away(r)).slice(0, byName ? 6 : 3);
      const tall = findT(q), ts = tall.filter(t=>!away(t)).slice(0, 4);
      const us = findU(q).slice(0, 2), es = findE(q).slice(0, 4);
      if (!YNOW) loadY().then(I=>{ if (I.w.length && inp.value.trim() === q && document.activeElement === inp) inp.dispatchEvent(new Event('input')); });
      const yf = findY(q), ye = yf.ye.slice(0, 2), yc = yf.yc.slice(0, 2), yw = yf.yw.slice(0, 3);
      const oo = [...tall.filter(away).map(t=>({t})), ...wall.filter(away).map(r=>({r}))].slice(0, 3);   // outside Ohio, last
      const n = ws.length + ts.length + es.length + us.length + oo.length + ye.length + yc.length + yw.length;
      const W = ws.length ? '<div class="grp">Wrestlers</div>' + ws.map(r=>`<a href="${hW(r.id)}"><span class="whoflex">${badge(r.tid, r.team, 's')}<span><strong>${esc(r.name)}</strong> <span class="sub">${esc(r.team)}</span></span></span><span class="sub">${r.ms?'MS · ':''}${r.season} · ${r.wt??''}</span></a>`).join('') : '';
      const TE = (ts.length ? '<div class="grp">Teams</div>' + ts.map(t=>`<a href="${t.ms ? hMT(t.tid) : hT(t.tid)}"><span class="whoflex">${badge(t.tid, t.name, 's')}<strong>${esc(t.name)}</strong></span><span class="sub">${t.ms ? 'Middle school' : t.div?'D-'+t.div:''}</span></a>`).join('') : '')
        + (es.length + us.length ? '<div class="grp">Events</div>'
          + us.map(u=>`<a href="${hPV(u)}"><strong>${esc(u.name)}</strong><span class="sub">${u.st==='live'?'Live now':'Coming up · ' + wlDates(u)}</span></a>`).join('')
          + es.map(e=>`<a href="${hE(e.eid)}"><strong>${esc(evName(e.name))}</strong><span class="sub">${fmtShort(e.date)}, ${e.date.slice(0,4)}</span></a>`).join('') : '');
      box.innerHTML = (byName ? W + TE : TE + W)
        + (oo.length ? '<div class="grp">Outside Ohio</div>' + oo.map(({t,r})=> t
            ? `<a href="${hT(t.tid)}"><span class="whoflex">${badge(t.tid, t.name, 's')}<strong>${esc(t.name)}</strong></span><span class="sub">${esc(STATES[t.st]||t.st)}</span></a>`
            : `<a href="${hW(r.id)}"><span class="whoflex">${badge(r.tid, r.team, 's')}<span><strong>${esc(r.name)}</strong> <span class="sub">${esc(r.team)}</span></span></span><span class="sub">${r.season}</span></a>`).join('') : '')
        + (ye.length + yc.length + yw.length ? '<div class="grp">Youth</div>'
          + ye.map(y=>`<a href="${hYE(y.id)}"><strong>${esc(y.name)}</strong><span class="sub">Youth event · ${fmtShort(y.date)}, ${y.date.slice(0,4)}</span></a>`).join('')
          + yc.map(c=>`<a href="${hYC(c[0])}"><strong>${esc(c[1])}</strong><span class="sub">Youth club</span></a>`).join('')
          + yw.map(w=>{ const c = w[2] != null ? YNOW.club.get(w[2]) : null; return `<a href="${hYW(w[0])}"><span><strong>${esc(w[1])}</strong> <span class="sub">${c ? esc(c[1]) : 'Unattached'}</span></span><span class="sub">Youth</span></a>`; }).join('') : '')
        + `<a class="all" href="#search">${n ? 'See all results' : 'No quick matches. Search everything'} for “${esc(inp.value.trim())}”</a>`;
      box.hidden = false;
      $('live').textContent = n ? `${n} suggestions. Press the down arrow to choose one.` : 'No suggestions';
      box.querySelector('.all').onclick = e => { e.preventDefault(); toSearch(inp.value); close(); };
    });
    inp.addEventListener('keydown', e => {
      if (e.key === 'ArrowDown' && !box.hidden){ e.preventDefault(); box.querySelector('a')?.focus(); }
      if (e.key === 'Escape'){ close(); }
    });
    box.addEventListener('keydown', e => {
      const items = [...box.querySelectorAll('a')], i = items.indexOf(document.activeElement);
      if (e.key === 'ArrowDown'){ e.preventDefault(); items[Math.min(i + 1, items.length - 1)]?.focus(); }
      if (e.key === 'ArrowUp'){ e.preventDefault(); if (i <= 0) inp.focus(); else items[i - 1].focus(); }
      if (e.key === 'Escape'){ close(); inp.focus(); }
    });
    box.addEventListener('click', e => { if (e.target.closest('a:not(.all)')){ close(); inp.value = ''; } });
    document.addEventListener('click', e => { if (!e.target.closest('#' + box.id) && e.target !== inp) close(); });
    window.addEventListener('hashchange', close);
  }
  typeahead($('hq'), $('hq-list')); typeahead($('h-q'), $('h-q-list'));
  $('hsearch').onsubmit = e => { e.preventDefault(); toSearch($('hq').value); $('hq').value=''; };
  $('h-form').onsubmit = e => { e.preventDefault(); toSearch($('h-q').value); };
  $('w-share').onclick = async () => { const url = location.href; try { if (navigator.share) { await navigator.share({title: document.title, url}); return; } await navigator.clipboard.writeText(url); $('live').textContent = 'Link copied'; $('w-share').textContent = 'Link copied'; setTimeout(()=>{ $('w-share').textContent = 'Share'; }, 2500); } catch(err) { $('live').textContent = 'Copy this page address to share it'; } };
  $('skip').onclick = e => { e.preventDefault(); const h1 = document.querySelector('main section:not([hidden]) h1'); if (h1) h1.focus(); };
  $('r-season').onchange = e => { S.preBack = false; S.season = e.target.value; S.asof='final'; S.showAll=false; renderRankings(); };
  $('r-asof').onchange = e => { S.asof = e.target.value; S.showAll=false; renderRankings(); };
  $('r-more').onclick = () => { S.showAll = true; renderRankings(); };
  $('o-season').onchange = e => { S.oSeason = e.target.value; renderOdds(); };
  $('t-season').onchange = e => { S.tSeason = e.target.value; S.tAll=false; renderTeams(); };
  $('t-more').onclick = () => { S.tAll = true; renderTeams(); };
  $('tm-season').onchange = e => { S.tmSeason = e.target.value; history.replaceState(null,'',hT(S.team,S.tmSeason,S.tmG)); renderTeam(); };
  $('e-season').onchange = e => { S.eSeason = e.target.value; renderEvents(); };
  $('w-mseason').onchange = e => { S.mSeason = e.target.value; renderMatches(); };
  $('s-q').oninput = () => { const q = $('s-q').value.trim(); history.replaceState(null, '', q ? '#search/' + encodeURIComponent(q) : '#search'); renderSearch(); };
  $('e-q').oninput = renderEvents;
  $('e-near').oninput = () => { history.replaceState(null,'', $('e-near').value.trim() ? `#events/near/${encodeURIComponent($('e-near').value.trim())}/${S.eSeason}` : '#events'); renderEvents(); };
  $('e-radius').onchange = renderEvents;
  picker($('c-a'), $('c-ar'), 'ca'); picker($('c-b'), $('c-br'), 'cb');
  window.addEventListener('hashchange', route);
  function wrapTables(){
    document.querySelectorAll('main table').forEach(t => {
      let w = t.parentElement;
      if (!w.classList.contains('scroll')){ w = document.createElement('div'); w.className = 'scroll'; t.before(w); w.appendChild(t); }
      const over = t.scrollWidth > w.clientWidth + 1;
      if (over && !w.hasAttribute('tabindex')){ w.tabIndex = 0; w.setAttribute('role','region'); w.setAttribute('aria-label', (w.closest('.card')?.querySelector('h2')?.textContent || 'Table') + ' (scrolls sideways)'); }
      if (!over && w.hasAttribute('tabindex')){ w.removeAttribute('tabindex'); w.removeAttribute('role'); w.removeAttribute('aria-label'); }
    });
  }
  let wt; new MutationObserver(() => { cancelAnimationFrame(wt); wt = requestAnimationFrame(wrapTables); }).observe(document.querySelector('main'), {childList:true, subtree:true});
  window.addEventListener('resize', () => requestAnimationFrame(wrapTables));
  let rz; window.addEventListener('resize', () => { clearTimeout(rz); rz = setTimeout(() => { const v=RH().slice(1).split('/')[0]; if (v==='wrestler') renderWrestler(); if (v==='odds') renderOdds(); }, 200); });

  /* ---- Real page addresses. Inside the app a route is still a '#view/arg/...' string; toPath/fromPath translate it
     to and from the address bar (/team/green-246/, /rankings/HS/2025-26/M/132/). Old # links (shared links,
     wrestle.live coach emails) still work: they are read as routes and the address is switched to the new path. ---- */
  const ROUTE_HEADS = new Set([...VIEWS, 'p4p', 'compare', 'matchups']);
  const isRouteHash = h => typeof h === 'string' && h[0] === '#' && ROUTE_HEADS.has(h.slice(1).split('/')[0]);
  // slug rules must match pages.py exactly, since the build writes a page at each of these addresses
  const slug = s => String(s || '').normalize('NFKD').toLowerCase().replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  const latestOf = rows => rows && rows.length ? rows.reduce((a, b) => (b.season > a.season || (b.season === a.season && b.g === 'M' && a.g !== 'M')) ? b : a) : null;
  const SEG = {
    team: id => { const r = latestOf(TBY.get(id)) || latestOf(MST.get(id)); return r ? slug(r.name) : ''; },
    wrestler: id => { const r = latestOf(BYID.get(id)) || latestOf(MSBY.get(id)); return r ? slug(r.name) : ''; },
    event: id => { const e = EVBY.get(id); if (!e) return ''; const y = /\b(19|20)\d\d\b/.test(e.name) ? '' : String(e.date || '').slice(0, 4); return slug(e.name) + (y ? '-' + y : ''); },
  };
  const toPath = h => {
    const p = String(h || '').replace(/^#/, '').split('/'); while (p.length && p[p.length - 1] === '') p.pop();
    if (!p.length || p[0] === 'home') return '/';
    if (p[0] === 'sim') p[0] = 'matchups';
    if (SEG[p[0]] && /^\d+$/.test(p[1] || '')){ const s = SEG[p[0]](+p[1]); if (s) p[1] = s + '-' + p[1]; }
    return '/' + p.join('/') + '/';
  };
  const fromPath = path => {
    const p = String(path || '/').replace(/^\/+|\/+$/g, '').split('/');
    if (p[0] === '' || p[0] === 'index.html') return '#home';
    if (SEG[p[0]] && p[1]){ const m = p[1].match(/(?:^|-)(\d+)$/); if (m) p[1] = m[1]; }
    return '#' + p.join('/');
  };
  const RH = () => isRouteHash(location.hash) ? location.hash : fromPath(location.pathname);
  // every history entry the app writes is a path, even where the code below still says '#...'
  for (const k of ['pushState', 'replaceState']){ const orig = history[k].bind(history);
    history[k] = (st, t, url) => orig(st, t, isRouteHash(url) ? toPath(url) : url); }
  const go = h => { history.pushState(null, '', h); window.dispatchEvent(new Event('hashchange')); };
  // a typed or old-style # address: switch the address bar to the path (the route itself reads either form)
  window.addEventListener('hashchange', () => { if (isRouteHash(location.hash)) history.replaceState(null, '', toPath(location.hash)); });
  window.addEventListener('popstate', () => { if (!isRouteHash(location.hash)) window.dispatchEvent(new Event('hashchange')); });
  // links: '#...' hrefs written anywhere in the app become real paths; clicks on them stay inside the app
  const fixLink = a => { const h = a.getAttribute('href'); if (isRouteHash(h)) a.setAttribute('href', toPath(h)); };
  const fixLinks = n => { if (n.nodeType !== 1) return; if (n.tagName === 'A') fixLink(n); n.querySelectorAll('a[href^="#"]').forEach(fixLink); };
  new MutationObserver(ms => { for (const m of ms){ if (m.type === 'attributes') fixLink(m.target); else m.addedNodes.forEach(fixLinks); } })
    .observe(document.body, {childList: true, subtree: true, attributes: true, attributeFilter: ['href']});
  fixLinks(document.body);   // the page's own markup, written before this ran
  const isAppPath = path => { const h = path.replace(/^\/+/, '').split('/')[0]; return h === '' || h === 'index.html' || ROUTE_HEADS.has(h); };
  document.addEventListener('click', e => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const a = e.target.closest('a[href]'); if (!a || (a.target && a.target !== '_self') || a.hasAttribute('download')) return;
    const h = a.getAttribute('href'); if (!h || h === '#') return;
    const u = new URL(isRouteHash(h) ? toPath(h) : a.href, location.href);
    if (u.origin !== location.origin || !isAppPath(u.pathname)) return;
    e.preventDefault(); if (u.pathname !== location.pathname || location.hash) go(u.pathname + u.search);
  });
  // the address for the current route, or null while the name it needs has not loaded yet
  const canonicalPath = () => { const h = RH(), p = h.slice(1).split('/');
    if (SEG[p[0]] && /^\d+$/.test(p[1] || '') && !SEG[p[0]](+p[1])) return null; return toPath(h); };

  const table = d => { const cols = d[0] || []; return d.slice(1).map(a => Object.fromEntries(cols.map((c,i)=>[c,a[i]]))); };
  // middle school records load in the background: pages that need them redraw when they arrive
  let started = false;
  const msLoad = fetch('ms.json').then(r=>r.ok ? r.json() : null).catch(()=>null).then(ms=>{
    if (!ms) return; MSROWS = table(ms);
    for (const r of MSROWS) (MSBY.get(r.id) || MSBY.set(r.id,[]).get(r.id)).push(r);
    const v = RH().slice(1).split('/')[0];
    MS_FEED = null;
    if (started && (v==='wrestler' || (v==='rankings' && S.rview==='ms') || v==='search' || (v==='team' && S.tmLv==='MS') || v==='home')) route();
  });
  const msFirst = /^#(rankings\/MS|wrestler\/|team\/)/.test(RH()) ? msLoad : null;   // a middle school page asked for directly waits for it
  // The current seasons first (data-now.json: the careers of everyone in the latest two seasons), the full history
  // behind them. Whichever arrives first starts the app; pages that need the history wait for it (route, needsAll).
  const getJ = f => fetch(f).then(r=>{ if(!r.ok) throw new Error(f+' '+r.status); return r.json(); });
  const setRows = d => { ROWS = table(d); BYID.clear(); for (const r of ROWS) (BYID.get(r.id) || BYID.set(r.id,[]).get(r.id)).push(r); MS_FEED = null; };
  const fullData = getJ('data.json');
  const nowData = fetch('data-now.json').then(r=>r.ok ? r.json() : null).catch(()=>null);
  const firstData = Promise.race([nowData.then(d=>d ? {d, full:false} : fullData.then(d=>({d, full:true}))),
    fullData.then(d=>({d, full:true}), err => nowData.then(d=>{ if (d) return new Promise(()=>{}); throw err; }))]);     // the history failing is fatal only if the first file failed too
  let setFull; fullReady = new Promise(r=>{ setFull = r; });
  Promise.all([firstData, getJ('meta.json'), getJ('teams.json'), getJ('events.json'), fetch('msteams.json').then(r=>r.ok?r.json():[[]]).catch(()=>[[]]),
    loadSchools().then(s=>{ SCHOOLS_READY = s; }), msFirst])
  .then(([x,m,t,e,mt])=>{
    setRows(x.d); FULL = x.full; META = m; TEAMS = table(t); EVENTS = table(e); NOW_S = new Set(m.now_seasons || []);
    for (const r of table(mt)) (MST.get(r.tid) || MST.set(r.tid,[]).get(r.tid)).push(r);
    if (FULL) setFull(); else fullData.then(d=>{ const hadHS = BYID.has(S.wid); setRows(d); FULL = true; S_TEAMS = null; setFull();
      if (!hadHS && BYID.has(S.wid)) S.mSeason = null;
      // redraw what is on screen where it draws on the history (careers, old opponents, search)
      const v = RH().slice(1).split('/')[0], cur = ({p4p:'rankings', compare:'sim', matchups:'sim'})[v] || v;
      if (started && ['home','wrestler','team','rankings','teams','search','sim','event','leaders','preview'].includes(cur) && !$('v-'+cur).hidden && !document.querySelector('dialog[open]')) Promise.resolve(RENDER[cur]()).catch(()=>{});
    }).catch(()=>{ FULLFAIL = true; $('live').textContent = 'Earlier seasons did not load. Reload the page to try again.';
      $('loading').hidden = false; $('loading').innerHTML = 'Earlier seasons did not load, so older pages and search are not available. <a href="javascript:location.reload()">Reload the page</a> to try again.'; });
    for (const x of TEAMS){ (TBY.get(x.tid) || TBY.set(x.tid,[]).get(x.tid)).push(x); TIDN.set(x.name, x.tid); if (x.st && x.st!=='OH') AWAY.set(x.tid, x.st); }
    for (const x of EVENTS){ EVBY.set(x.eid, x); if (x.sid!=null) (SERIES.get(x.sid) || SERIES.set(x.sid,[]).get(x.sid)).push(x); }
    const latest = META.seasons[META.seasons.length-1];
    S.season = S.pSeason = S.tSeason = S.eSeason = latest;
    // until the new season has weekly lists, Rankings opens on the preseason projection
    if (META.pre_season && !((META.weekly||{})[META.pre_season]||[]).length) S.season = S.tSeason = 'pre';
    const four = [...BYID.entries()].filter(([,v])=>v.length>=4 && v.some(r=>r.season===latest)).sort((a,b)=>Math.max(...b[1].map(r=>r.pp??0))-Math.max(...a[1].map(r=>r.pp??0)));
    S.wid = four.length ? four[0][0] : ROWS[0].id;
    S.ca = S.wid; { const a = BYID.get(S.wid).find(r=>r.season===latest); const c = ROWS.filter(r=>r.season===latest && r.g===a.g && r.wt===a.wt && r.id!==a.id && r.ranked).sort((x,y)=>x.rank-y.rank); S.cb = c[0]?.id ?? null; }
    const tops = TEAMS.filter(x=>x.season===latest && x.g==='M' && x.rank).sort((a,b)=>a.rank-b.rank);
    S.team = tops[0]?.tid; S.tmSeason = latest;
    const st = EVENTS.filter(x=>x.season===latest && x.type==='state'); S.event = (st[0]||EVENTS[EVENTS.length-1]).eid;
    $('loading').hidden = true;
    started = true;
    { const c = canonicalPath(); if (c && c !== location.pathname) history.replaceState(null, '', c); }   // old # links, renamed slugs
    document.getElementById('seo')?.remove();   // the page's built-in text, shown until the app is running
    route();
    setTimeout(()=>loadWLUp().then(U=>{ WLUP_NOW = U; }), 1500); setTimeout(loadY, 1700);     // events on wrestle.live, for search
  }).catch(err => { $('loading').textContent = 'The rankings data did not load. Reload the page to try again. (' + err.message + ')'; });
})();


if (location.hostname === 'rankings.wrestle.live') {
  const cf = document.createElement('script');
  cf.type = 'module';
  cf.src = 'https://static.cloudflareinsights.com/beacon.min.js';
  cf.setAttribute('data-cf-beacon', '{"token": "2d64a0e79e8a44d08b94832cb701d72e"}');
  document.body.appendChild(cf);
}
