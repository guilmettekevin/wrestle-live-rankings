/* built by pages.py from app.html */
if (!document.getElementById('loading')) document.body.insertAdjacentHTML('afterbegin', "\n<a class=\"skip\" href=\"#\" id=\"skip\">Skip to content</a>\n<header class=\"mast\"><div class=\"mast-in\">\n  <a class=\"brand\" href=\"#home\"><span class=\"bw\">wrestle<span>.live</span></span> <small>RANKINGS</small><span class=\"sr\"> home</span></a>\n  <nav class=\"tabs\" aria-label=\"Views\">\n    <a href=\"#home\" data-view=\"home\">Home</a>\n    <a href=\"#rankings\" data-view=\"rankings\">Rankings</a>\n    <a href=\"#teams\" data-view=\"teams\">Teams</a>\n    <a href=\"#events\" data-view=\"events\">Events</a>\n    <a href=\"#matchups\" data-view=\"sim\">Matchups</a>\n    <a href=\"#odds\" data-view=\"odds\" id=\"tab-odds\">State odds</a>\n  </nav>\n  <form class=\"hsearch\" role=\"search\" id=\"hsearch\"><label for=\"hq\" class=\"sr\">Search wrestlers, schools and events</label><input id=\"hq\" type=\"search\" placeholder=\"Search wrestlers, schools\" autocomplete=\"off\" aria-controls=\"hq-list\"><div class=\"suggest\" id=\"hq-list\" hidden></div></form>\n  <a class=\"sister\" href=\"https://wrestle.live/\" target=\"_blank\" rel=\"noopener\">wrestle.live<span aria-hidden=\"true\"> \u2197</span><span class=\"sr\"> tournament hosting (opens in a new tab)</span></a>\n  <a class=\"msearch\" href=\"#search\" aria-label=\"Search\"><svg aria-hidden=\"true\" width=\"16\" height=\"16\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.4\" stroke-linecap=\"round\"><circle cx=\"11\" cy=\"11\" r=\"7\"></circle><path d=\"M20 20l-3.5-3.5\"></path></svg><span class=\"lbl\">Search</span></a>\n</div></header>\n<nav class=\"bottombar\" aria-label=\"Phone menu\">\n  <a href=\"#home\" data-view=\"home\"><svg aria-hidden=\"true\" width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 11l9-7 9 7v9a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z\"></path></svg>Home</a>\n  <a href=\"#rankings\" data-view=\"rankings\"><svg aria-hidden=\"true\" width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 20V10M10 20V4M16 20v-7M22 20H2\"></path></svg>Rankings</a>\n  <a href=\"#odds\" data-view=\"odds\" id=\"bb-odds\"><svg aria-hidden=\"true\" width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M3 5h5v4H3zM3 15h5v4H3zM8 7h4v10H8M12 12h5M17 10h4v4h-4z\"></path></svg>State odds</a>\n  <a href=\"#teams\" data-view=\"teams\"><svg aria-hidden=\"true\" width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2\"></path><circle cx=\"9\" cy=\"7\" r=\"4\"></circle><path d=\"M23 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8\"></path></svg>Teams</a>\n  <a href=\"#matchups\" data-view=\"sim\" id=\"bb-sim\"><svg aria-hidden=\"true\" width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><path d=\"M4 8h14l-4-4\"/><path d=\"M20 16H6l4 4\"/></svg>Matchups</a>\n  <button type=\"button\" id=\"morebtn\" aria-expanded=\"false\" aria-controls=\"moresheet\"><svg aria-hidden=\"true\" width=\"22\" height=\"22\" viewBox=\"0 0 24 24\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2\" stroke-linecap=\"round\" stroke-linejoin=\"round\"><circle cx=\"5\" cy=\"12\" r=\"1.5\"></circle><circle cx=\"12\" cy=\"12\" r=\"1.5\"></circle><circle cx=\"19\" cy=\"12\" r=\"1.5\"></circle></svg>More</button>\n</nav>\n<div class=\"moresheet\" id=\"moresheet\" hidden>\n  <a href=\"#events\">Events</a><a href=\"#matchups\" id=\"more-sim\">Matchups</a><a href=\"#odds\" id=\"more-odds\">State odds</a><a href=\"#accuracy\">How accurate is it?</a><a href=\"#search\">Search</a><a class=\"ext\" href=\"https://wrestle.live/\" target=\"_blank\" rel=\"noopener\">Host a tournament on wrestle.live<span aria-hidden=\"true\"> \u2197</span><span class=\"sr\"> (opens in a new tab)</span></a>\n</div>\n\n<main>\n  <p id=\"live\" class=\"sr\" role=\"status\" aria-live=\"polite\"></p>\n  <p id=\"loading\" class=\"lede\" role=\"status\">Loading Ohio results\u2026</p>\n\n  <!-- HOME -->\n  <section id=\"v-home\" hidden>\n    <div class=\"hero-home\">\n      <div class=\"hero-bg\" aria-hidden=\"true\"><span class=\"mat m1\"></span><span class=\"mat m2\"></span><span class=\"mat m3\"></span></div>\n      <div>\n        <p class=\"eyebrow\">Now covering Ohio \u00b7 high school and middle school \u00b7 boys and girls</p>\n        <h1 tabindex=\"-1\">Rankings built <br><span class=\"hl-gold\">from real results.</span></h1>\n        <p class=\"lede\" id=\"h-lede\">Ratings, P4P Scores, career histories and state bracket odds from tournament results. Updated through the season.</p>\n      </div>\n      <form class=\"searchcard\" role=\"search\" id=\"h-form\">\n        <label for=\"h-q\">Find a wrestler, school or event</label>\n        <div class=\"row\"><input id=\"h-q\" type=\"search\" placeholder=\"e.g. a name or a school\" autocomplete=\"off\" aria-controls=\"h-q-list\"><button type=\"submit\" class=\"btn primary\">Search</button></div>\n        <div class=\"suggest\" id=\"h-q-list\" hidden></div>\n        <div class=\"quick\" id=\"h-quick\"><a href=\"#rankings/pre\" id=\"q-pre\" hidden>Preseason rankings</a><a href=\"#rankings/MS\">Middle school rankings</a><a href=\"#matchups/d\">Simulate a dual</a><a href=\"#matchups/w\">Compare two wrestlers</a><a href=\"#rankings/movers\" id=\"q-movers\" hidden>This week's biggest movers</a><a href=\"#odds\" id=\"q-odds\" hidden>State bracket odds</a></div>\n      </form>\n    </div>\n    <div class=\"strip\" id=\"h-strip\" aria-label=\"By the numbers\"></div>\n    <section class=\"sect\" aria-labelledby=\"h-ones\">\n      <div class=\"secthead\"><div><h2 id=\"h-ones\">No. 1 at every weight</h2><p class=\"sub\" id=\"h-ones-sub\" style=\"margin:2px 0 0;font-size:14px\"></p></div><div class=\"sh-right\"><a class=\"lnk\" id=\"h-ones-all\" href=\"#rankings\">Full rankings</a><div class=\"seg\" role=\"group\" aria-label=\"Gender\" id=\"h-g\"></div></div></div>\n      <div class=\"ones\" id=\"h-onesgrid\"></div>\n    </section>\n    <section class=\"sect\" aria-labelledby=\"h-lead\"><h2 id=\"h-lead\">Pound-for-pound and team leaders</h2><div class=\"leaders\" id=\"h-leaders\"></div></section>\n    <section class=\"sect\" aria-labelledby=\"h-how\"><h2 id=\"h-how\">How to read the numbers</h2><div class=\"explain\" id=\"h-explain\"></div></section>\n  </section>\n\n  <!-- RANKINGS -->\n  <section id=\"v-rankings\" hidden>\n    <p class=\"eyebrow\" id=\"r-eyebrow\">Ohio high school \u00b7 statewide</p>\n    <h1 tabindex=\"-1\">Rankings</h1>\n    <p class=\"lede\" id=\"r-lede\"><strong>Rating</strong> is how strong a wrestler is right now, built from every bout we have; the \u00b1 is how sure it is. <strong>P4P Score</strong> puts every weight on one scale: 500 is a typical state qualifier, 1,000 a typical state champion.</p>\n    <div class=\"viewtabs\" role=\"group\" aria-label=\"Rankings view\" id=\"r-views\"></div>\n    <details class=\"about\"><summary>How rankings work</summary>\n      <p>Ratings use Glicko-2: every bout moves both wrestlers, and a pin moves them more than a decision. The \u00b1 shows how sure the rating is. To be ranked a wrestler needs an Ohio team and 6 rated bouts in the season (4 for weekly rankings). Early in the season, until December 15, the weekly list also shows returning wrestlers after 1 bout and new wrestlers after 3, marked provisional, so there is a current list from the first weekend. Ratings compare wrestlers within a season; P4P Scores compare across weights and seasons. Records count only bouts in the database. <a href=\"#accuracy\">How accurate are the ratings?</a></p>\n    </details>\n    <div class=\"filters toolbar\">\n      <div class=\"field\"><label for=\"r-season\">Season</label><select id=\"r-season\"></select></div>\n      <div class=\"field\"><label for=\"r-asof\">As of</label><select id=\"r-asof\"></select></div>\n      <div class=\"seg\" role=\"group\" aria-label=\"Gender\" id=\"r-gender\"></div>\n      <div class=\"seg\" role=\"group\" aria-label=\"Division\" id=\"r-div\"></div>\n      <div class=\"seg\" role=\"group\" aria-label=\"Grade\" id=\"r-grade\"></div>\n    </div>\n    <p class=\"note\" id=\"r-gnote\" hidden>Grade comes from the OHSAA state pairings, middle school records and full four-season careers, so it is known for about half of ranked wrestlers. Wrestlers without a known grade are left out when a grade is picked.</p>\n    <div class=\"pills\" role=\"group\" aria-label=\"Weight class\" id=\"r-weights\"></div>\n    <div class=\"podium\" id=\"r-podium\" aria-label=\"Top three\"></div>\n    <p class=\"note\" id=\"r-prenote\" hidden></p>\n    <p class=\"note prov-note\" id=\"r-provnote\" hidden><span class=\"chip prov\">Provisional</span> Early in the season (until December 15) a returning wrestler is listed after 1 bout and a new wrestler after 3, so there is a current list from the first weekend. Ranks firm up once a wrestler has 4 bouts.</p>\n    <div class=\"card\">\n      <div class=\"card-head\"><h2 id=\"r-title\"></h2><span class=\"sub\" id=\"r-count\"></span></div>\n      <table><thead id=\"r-head\"></thead><tbody id=\"r-body\"></tbody></table>\n      <div class=\"more\"><button type=\"button\" id=\"r-more\">Show all</button></div>\n    </div>\n    <div class=\"card\" id=\"r-movers\" hidden style=\"margin-top:16px\"></div>\n  </section>\n\n  <!-- STATE ODDS -->\n  <section id=\"v-odds\" hidden>\n    <p class=\"eyebrow\">OHSAA state tournament</p>\n    <h1 tabindex=\"-1\">State bracket odds</h1>\n    <p class=\"lede\">We simulated each state bracket 20,000 times, using only what was known before the tournament, then compared the odds with what actually happened.</p>\n    <ol class=\"howstate\" aria-label=\"How the state tournament works\">\n      <li><strong>16 make state</strong><span>at each weight, after sectionals and districts</span></li>\n      <li><strong>Win 4 straight</strong><span>to become state champion</span></li>\n      <li><strong>Lose once</strong><span>and you can still wrestle back for 3rd to 8th. Lose twice and you're out.</span></li>\n      <li><strong>Top 8 medal</strong><span>and stand on the podium</span></li>\n    </ol>\n    <details class=\"about\"><summary>How the odds work</summary>\n      <p>Brackets use the real draw (bracket spots 1 to 16 from the OHSAA pairings). Each bout's chance comes from the blend: the wrestler's rating plus their official season record, district finish, grade and last year's state finish, weighted by what predicted state bouts best in earlier seasons, with recent seasons counting most. The more of both wrestlers' bouts we have, the more the rating counts. Title odds follow the bracket exactly; placing odds approximate the consolation crossings. <span id=\"o-about\"></span></p>\n    </details>\n    <div class=\"filters\">\n      <div class=\"field\"><label for=\"o-season\">Season</label><select id=\"o-season\"></select></div>\n      <div class=\"seg\" role=\"group\" aria-label=\"Division\" id=\"o-div\"></div>\n      <div class=\"seg\" role=\"group\" aria-label=\"View\" id=\"o-view\"></div>\n    </div>\n    <div class=\"pills\" role=\"group\" aria-label=\"Weight class\" id=\"o-weights\"></div>\n    <div class=\"sumcards\" id=\"o-cards\"></div>\n    <p class=\"note bracketnote\" id=\"o-bnote\">Each box is one group of four bracket spots: two first-round bouts, whose winners meet in the quarterfinal for one semifinal spot. Each half of the bracket sends one wrestler to the final.</p>\n    <div id=\"o-quarters\"></div>\n    <div class=\"card\" id=\"o-tablecard\">\n      <div class=\"card-head\"><h2 id=\"o-title\"></h2><span class=\"sub\" id=\"o-sum\"></span></div>\n      <table>\n        <thead><tr><th class=\"num lg\">Spot</th><th>Wrestler</th><th class=\"lg\">School</th><th class=\"num lg\">Rating</th><th class=\"num\">Win state</th><th class=\"num lg\">Top 3</th><th class=\"num\">Medal <span class=\"lg\">(top 8)</span></th><th class=\"num lg\">Expected finish</th><th>Actual finish</th></tr></thead>\n        <tbody id=\"o-body\"></tbody>\n      </table>\n    </div>\n  </section>\n\n\n  <!-- TEAMS LIST -->\n  <section id=\"v-teams\" hidden>\n    <p class=\"eyebrow\">Ohio programs</p>\n    <h1 tabindex=\"-1\">Team rankings</h1>\n    <p class=\"lede\">Lineup strength adds each team's best P4P Score at every weight, so it rewards depth, not one star.</p>\n    <div class=\"filters\">\n      <div class=\"field\"><label for=\"t-season\">Season</label><select id=\"t-season\"></select></div>\n      <div class=\"seg\" role=\"group\" aria-label=\"Gender\" id=\"t-gender\"></div>\n      <div class=\"seg\" role=\"group\" aria-label=\"Division\" id=\"t-div\"></div>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-head\"><h2 id=\"t-title\"></h2><span class=\"sub\" id=\"t-count\"></span></div>\n      <table>\n        <thead><tr><th>Rank</th><th>Team</th><th class=\"lg\">Div</th><th class=\"num\">Strength</th><th class=\"num lg\">Weights filled</th><th class=\"num lg\">Ranked</th><th class=\"num lg\">State qualifiers</th><th class=\"num lg\">Placers</th><th class=\"num lg\">Champions</th></tr></thead>\n        <tbody id=\"t-body\"></tbody>\n      </table>\n      <div class=\"more\"><button type=\"button\" id=\"t-more\">Show all</button></div>\n    </div>\n  </section>\n\n  <!-- TEAM -->\n  <section id=\"v-team\" hidden>\n    <div class=\"whero\">\n      <div class=\"stripe\" id=\"tm-bar\" aria-hidden=\"true\" hidden></div>\n      <span class=\"mono\" id=\"tm-mono\" aria-hidden=\"true\"></span>\n      <div style=\"flex:1 1 380px;min-width:0\">\n        <p class=\"eyebrow\" id=\"tm-eyebrow\"></p>\n        <h1 id=\"tm-name\" tabindex=\"-1\"></h1>\n        <div class=\"schoolid\" id=\"tm-school\" hidden></div>\n      </div>\n    </div>\n    <div class=\"viewtabs\" role=\"group\" aria-label=\"Team view\" id=\"tm-views\"></div>\n    <div class=\"filters\">\n      <div class=\"field\" id=\"tm-season-f\"><label for=\"tm-season\">Season</label><select id=\"tm-season\"></select></div>\n      <div class=\"seg\" role=\"group\" aria-label=\"Program\" id=\"tm-gender\"></div>\n      <a class=\"btn ghost\" id=\"tm-sim\" href=\"#matchups/d\">Simulate a dual</a>\n    </div>\n    <div id=\"tm-hist\" hidden>\n      <div class=\"tiles\" id=\"tm-htiles\"></div>\n      <div class=\"grid2\">\n        <div class=\"card\">\n          <div class=\"card-head\"><h2>Best at every weight</h2><span class=\"sub\">Best single season at each weight</span></div>\n          <table>\n            <thead><tr><th class=\"num\">Weight</th><th>Wrestler</th><th class=\"num lg\">Season</th><th class=\"num\">P4P</th><th class=\"lg\">State</th></tr></thead>\n            <tbody id=\"tm-hbest\"></tbody>\n          </table>\n        </div>\n        <div class=\"card\">\n          <div class=\"card-head\"><h2>Top 10 seasons</h2><span class=\"sub\">All weights, ranked by P4P Score</span></div>\n          <table>\n            <thead><tr><th class=\"num\">#</th><th>Wrestler</th><th class=\"num\">Weight</th><th class=\"num lg\">Season</th><th class=\"num\">P4P</th><th class=\"lg\">State</th></tr></thead>\n            <tbody id=\"tm-htop\"></tbody>\n          </table>\n        </div>\n      </div>\n      <p class=\"note\" style=\"margin-top:14px\">History covers 2010-11 to today, from the results in our database; earlier seasons are mostly postseason results. P4P Score compares each season with that year's state field, so seasons from different years rank fairly. Older weight classes count toward the nearest current one (145 counts at 144).</p>\n    </div>\n    <div id=\"tm-seasonview\">\n    <div class=\"tiles\" id=\"tm-tiles\"></div>\n    <div class=\"grid2\">\n      <div class=\"card\">\n        <div class=\"card-head\"><h2>Lineup</h2><span class=\"sub\">Best ranked wrestler at each weight</span></div>\n        <table>\n          <thead><tr><th class=\"num\">Wt</th><th>Wrestler</th><th class=\"num lg\">Record</th><th class=\"num lg\">Rating</th><th class=\"num\">Rank</th><th class=\"num\">P4P</th><th class=\"lg\">State</th></tr></thead>\n          <tbody id=\"tm-lineup\"></tbody>\n        </table>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-head\"><h2>Events</h2><span class=\"sub\">Team record in bouts we have</span></div>\n        <div id=\"tm-events\"><p class=\"loading\">Loading events\u2026</p></div>\n      </div>\n    </div>\n    <div class=\"card\" id=\"tm-roster-card\" style=\"margin-top:16px\">\n      <div class=\"card-head\"><h2 id=\"tm-roster-h\">Full roster</h2><span class=\"sub\" id=\"tm-roster-sub\">Everyone with a bout for this team in our results</span></div>\n      <table>\n        <thead><tr><th class=\"num\">Wt</th><th>Wrestler</th><th class=\"num lg\">Grade</th><th class=\"num\">Record</th><th class=\"num lg\">Pins</th><th class=\"num lg\">Rating</th><th class=\"num\">Rank</th></tr></thead>\n        <tbody id=\"tm-roster\"><tr><td colspan=\"7\" class=\"loading\">Loading roster\u2026</td></tr></tbody>\n      </table>\n    </div>\n    <div class=\"card\" id=\"tm-moved\" hidden style=\"margin-top:16px\">\n      <div class=\"card-head\"><h2 id=\"tm-moved-h\">Changed schools during the season</h2><span class=\"sub\">Wrestled for this team for part of the season</span></div>\n      <table>\n        <thead><tr><th>Wrestler</th><th>Move</th><th class=\"num\">Bouts here</th><th class=\"lg\">Here</th></tr></thead>\n        <tbody id=\"tm-moved-body\"></tbody>\n      </table>\n    </div>\n    </div>\n  </section>\n\n  <!-- EVENTS LIST -->\n  <section id=\"v-events\" hidden>\n    <p class=\"eyebrow\">Results in the database</p>\n    <h1 tabindex=\"-1\">Events</h1>\n    <div class=\"filters toolbar\">\n      <div class=\"field\"><label for=\"e-season\">Season</label><select id=\"e-season\"></select></div>\n      <div class=\"seg\" role=\"group\" aria-label=\"Level\" id=\"e-level\"></div>\n      <div class=\"seg\" role=\"group\" aria-label=\"Event type\" id=\"e-type\"></div>\n      <div class=\"seg\" role=\"group\" aria-label=\"Gender\" id=\"e-gender\"></div>\n    </div>\n    <div class=\"filters e-find\">\n      <div class=\"field grow\"><label for=\"e-q\">Search</label><input type=\"search\" id=\"e-q\" placeholder=\"Event, school, town or county\" autocomplete=\"off\"></div>\n      <div class=\"field\"><label for=\"e-near\">Near</label><input type=\"search\" id=\"e-near\" list=\"e-towns\" placeholder=\"Town or ZIP\" autocomplete=\"off\" style=\"width:160px\"><datalist id=\"e-towns\"></datalist></div>\n      <div class=\"field\"><label for=\"e-radius\">Within</label><select id=\"e-radius\"><option value=\"15\">15 miles</option><option value=\"30\" selected>30 miles</option><option value=\"60\">60 miles</option></select></div>\n      <p class=\"sub e-nearmsg\" id=\"e-nearmsg\" role=\"status\" aria-live=\"polite\"></p>\n    </div>\n    <div class=\"card\">\n      <div class=\"card-head\"><h2 id=\"e-title\"></h2><span class=\"sub\" id=\"e-count\"></span></div>\n      <table>\n        <thead><tr><th>Event</th><th class=\"lg\">Where</th><th class=\"lg\">Type</th><th class=\"num\">Bouts</th></tr></thead>\n        <tbody id=\"e-body\"></tbody>\n      </table>\n    </div>\n    <div class=\"card hostcard\">\n      <div><h2>Running an event?</h2><p>Host it on wrestle.live: brackets, live results and registration in one place.</p></div>\n      <a class=\"btn\" href=\"https://wrestle.live/\" target=\"_blank\" rel=\"noopener\">Host on wrestle.live<span aria-hidden=\"true\"> \u2197</span><span class=\"sr\"> (opens in a new tab)</span></a>\n    </div>\n  </section>\n\n  <!-- EVENT -->\n  <section id=\"v-event\" hidden>\n    <p class=\"eyebrow\" id=\"ev-eyebrow\"></p>\n    <h1 id=\"ev-name\" tabindex=\"-1\"></h1>\n    <p class=\"lede\" id=\"ev-sub\"></p>\n    <p class=\"ev-where\" id=\"ev-where\" hidden></p>\n    <nav class=\"ev-years\" id=\"ev-years\" aria-label=\"This event in other years\" hidden></nav>\n    <div class=\"pills\" role=\"group\" aria-label=\"Weight class\" id=\"ev-weights\" style=\"margin-top:18px\"></div>\n    <div class=\"grid2\" id=\"ev-grid\">\n      <div class=\"ev-col\">\n      <div class=\"card\">\n        <div class=\"card-head\"><h2 id=\"ev-ptitle\">Placers</h2></div>\n        <div id=\"ev-placers\"></div>\n      </div>\n      <div class=\"card\" id=\"ev-hist\" hidden>\n      <div class=\"card-head\"><h2 id=\"ev-htitle\">Past champions</h2><span class=\"sub\" id=\"ev-hsub\"></span></div>\n      <table><thead><tr><th>Season</th><th>Champion</th><th class=\"lg\">School</th></tr></thead><tbody id=\"ev-hbody\"></tbody></table>\n    </div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-head\"><h2 id=\"ev-btitle\">Bouts</h2><span class=\"sub\" id=\"ev-bcount\"></span></div>\n        <div id=\"ev-bouts\"><p class=\"loading\">Loading bouts\u2026</p></div>\n      </div>\n    </div>\n  </section>\n\n  <!-- WRESTLER -->\n  <section id=\"v-wrestler\" hidden>\n    <div class=\"whero\">\n      <span class=\"mono\" id=\"w-mono\" aria-hidden=\"true\"></span>\n      <div style=\"flex:1 1 380px;min-width:0\">\n        <p class=\"eyebrow\" id=\"w-eyebrow\">Wrestler</p>\n        <h1 id=\"w-name\" tabindex=\"-1\"></h1>\n        <p class=\"lede\" id=\"w-sub\"></p>\n        <div class=\"badges\" id=\"w-badges\"></div>\n      </div>\n      <div class=\"acts\"><a class=\"btn\" href=\"#matchups/w\" id=\"w-compare\">Compare</a><button type=\"button\" class=\"btn ghost\" id=\"w-share\">Share</button></div>\n    </div>\n    <div class=\"tiles\" id=\"w-tiles\"></div>\n    <div id=\"w-sosbar\"></div>\n    <div class=\"grid2 wgrid\">\n      <div class=\"card\">\n        <div class=\"card-head\"><h2>P4P Score by season</h2><span class=\"sub\">500 typical qualifier \u00b7 1000 typical champion</span></div>\n        <div class=\"chart\" id=\"w-chart\"></div>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-head\"><h2>Seasons</h2></div>\n        <table>\n          <thead><tr><th>Season and school</th><th class=\"num\">Wt</th><th class=\"num\">Record</th><th class=\"num lg\">Rating</th><th class=\"num lg\">Rank</th><th class=\"num\">P4P</th><th>State</th></tr></thead>\n          <tbody id=\"w-body\"></tbody>\n        </table>\n      </div>\n    </div>\n    <div class=\"card sos\" style=\"margin-top:16px\" id=\"w-mcard\">\n      <h2 class=\"sr\">Matches and strength of schedule</h2>\n      <div class=\"card-head wtabs\"><div class=\"viewtabs\" role=\"group\" aria-label=\"Match view\" id=\"w-mviews\"></div><select id=\"w-mseason\" aria-label=\"Season\"></select></div>\n      <div id=\"w-matches\"><p class=\"loading\">Loading matches\u2026</p></div>\n      <div id=\"w-sos\" hidden><p class=\"sub sosnote\">Opponents judged by their end-of-season rating. \"Tougher than\" compares the average with other Ohio wrestlers' schedules that season (10+ rated opponents needed). Ohio high school bouts only; forfeits left out.</p><div id=\"w-sosbody\"><p class=\"loading\">Working out schedule strength\u2026</p></div></div>\n    </div>\n  </section>\n\n  <!-- COMPARE -->\n\n  <!-- SIMULATOR -->\n  <section id=\"v-sim\" hidden>\n    <p class=\"eyebrow\">Who wins?</p>\n    <h1 tabindex=\"-1\">Matchups</h1>\n    <p class=\"lede\" id=\"sim-lede\">Compare two wrestlers, play out a dual meet, or simulate a tournament, all from every wrestler's rating.</p>\n    <div class=\"viewtabs\" role=\"group\" aria-label=\"Matchup type\" id=\"sim-mode\"></div>\n    <div class=\"filters\">\n\n      <div class=\"field\"><label for=\"sim-season\">Season</label><select id=\"sim-season\"></select></div>\n      <div class=\"seg\" role=\"group\" aria-label=\"Boys or girls\" id=\"sim-g\"></div>\n    </div>\n    <p class=\"note sim-projnote\" id=\"sim-proj\" hidden></p>\n    <div id=\"sim-wr\" hidden>\n    <div class=\"vs\" style=\"margin-top:18px\">\n      <div class=\"picker\"><label for=\"c-a\">Wrestler A</label><input type=\"search\" id=\"c-a\" placeholder=\"Name or school\" autocomplete=\"off\"><div class=\"results\" id=\"c-ar\" hidden></div></div>\n      <div class=\"vsx\" style=\"font-family:var(--display);font-weight:700;font-size:22px;color:var(--muted);padding-bottom:8px\">VS</div>\n      <div class=\"picker\"><label for=\"c-b\">Wrestler B</label><input type=\"search\" id=\"c-b\" placeholder=\"Name or school\" autocomplete=\"off\"><div class=\"results\" id=\"c-br\" hidden></div></div>\n    </div>\n    <div id=\"c-out\"></div>\n    </div>\n    <div id=\"sim-dual\">\n      <div class=\"vs\">\n        <div class=\"picker\"><label for=\"sim-a\">Team A</label><input type=\"search\" id=\"sim-a\" placeholder=\"School name\" autocomplete=\"off\"><div class=\"results\" id=\"sim-ar\" hidden></div></div>\n        <div class=\"vsx\" style=\"font-family:var(--display);font-weight:700;font-size:22px;color:var(--muted);padding-bottom:8px\">VS</div>\n        <div class=\"picker\"><label for=\"sim-b\">Team B</label><input type=\"search\" id=\"sim-b\" placeholder=\"School name\" autocomplete=\"off\"><div class=\"results\" id=\"sim-br\" hidden></div></div>\n      </div>\n      <div id=\"sim-dout\"></div>\n    </div>\n    <div id=\"sim-tourn\" hidden>\n      <div class=\"sim-add\">\n        <div class=\"picker\"><label for=\"sim-t\">Add a team</label><input type=\"search\" id=\"sim-t\" placeholder=\"School name\" autocomplete=\"off\"><div class=\"results\" id=\"sim-tr\" hidden></div></div>\n        <div class=\"picker sim-evpick\"><label for=\"sim-ev\" id=\"sim-evl\">Or load the teams from a real event</label>\n          <input type=\"search\" id=\"sim-ev\" placeholder=\"Search events, or click to browse\" autocomplete=\"off\" role=\"combobox\" aria-expanded=\"false\" aria-controls=\"sim-evr\" aria-autocomplete=\"list\">\n          <div class=\"results\" id=\"sim-evr\" role=\"listbox\" aria-labelledby=\"sim-evl\" hidden></div></div>\n        <div class=\"field\"><label for=\"sim-places\">Places</label><select id=\"sim-places\"><option value=\"6\">6</option><option value=\"8\" selected>8</option></select></div>\n      </div>\n      <div class=\"chips\" id=\"sim-chips\"></div>\n      <div id=\"sim-tout\"></div>\n    </div>\n    <p class=\"note\" id=\"sim-how\">How it works: each bout's odds come from the two wrestlers' latest ratings for the season, and the way a win comes (fall, tech fall, major, decision) follows how bouts with the same odds have gone in our results. Lineups start with each team's highest-rated wrestler at his or her usual weight; change any spot. Duals are worked out exactly over every possible result of every bout, so the same lineups always give the same odds; fall, forfeit or default 6, tech fall 5, major 4, decision 3. Key bouts are the close ones that change a team's chance to win the dual the most. Tournaments: seeded by rating; 2 points per championship win and 1 per consolation win, bonus 2 for a fall, 1.5 for a tech fall, 1 for a major, and placement points 16-12-10-9-7-6-4-3.</p>\n  </section>\n\n  <!-- SEARCH -->\n  <section id=\"v-search\" hidden>\n    <h1 tabindex=\"-1\">Search</h1>\n    <div class=\"filters\"><input type=\"search\" id=\"s-q\" placeholder=\"Wrestler, school or event\" autocomplete=\"off\" aria-label=\"Search wrestlers, schools and events\"></div>\n    <div class=\"stack\" id=\"s-out\"></div>\n  </section>\n\n  <!-- ACCURACY -->\n  <section id=\"v-accuracy\" hidden>\n    <p class=\"eyebrow\">Backtest \u00b7 every state tournament we have</p>\n    <h1 tabindex=\"-1\">How accurate is it?</h1>\n    <p class=\"lede\">The fair test of a rating: for every season, we used only what was known the day before the state tournament to pick the winner of every state bout, then checked the picks against what happened.</p>\n    <div class=\"tiles\" id=\"a-tiles\"></div>\n    <div class=\"card acc-main\">\n      <div class=\"card-head\"><h2>State tournament picks, season by season</h2><span class=\"sub\">Share of state bouts picked correctly</span></div>\n      <div class=\"acc-key\" aria-hidden=\"true\"><span><i class=\"k1\"></i>Blend</span><span><i class=\"k2\"></i>Rating alone</span><span><i class=\"k3\"></i>Better season record</span><span><i class=\"k4\"></i>Better district finish</span></div>\n      <table>\n        <thead><tr><th>Season</th><th class=\"num lg\">Bouts</th><th>Blend</th><th>Rating alone</th><th class=\"num\">Record</th><th class=\"num lg\">District</th></tr></thead>\n        <tbody id=\"a-body\"></tbody>\n      </table>\n    </div>\n    <div class=\"grid2 eq\" style=\"margin-top:16px\">\n      <div class=\"card\">\n        <div class=\"card-head\"><h2>Week-ahead picks</h2><span class=\"sub\">In-season bouts</span></div>\n        <p class=\"note acc-intro\">Each week's ratings picked every bout in the following 7 days.</p>\n        <table><thead><tr><th>Season</th><th class=\"num lg\">Weeks</th><th class=\"num\">Bouts</th><th>Correct</th></tr></thead><tbody id=\"a-week\"></tbody></table>\n      </div>\n      <div class=\"card\">\n        <div class=\"card-head\"><h2>State title odds</h2><span class=\"sub\">Simulated brackets</span></div>\n        <p class=\"note acc-intro\">How often the wrestler we made the title favorite won, and the odds we gave the eventual champion.</p>\n        <table><thead><tr><th>Season</th><th class=\"num lg\">Brackets</th><th>Favorite won</th><th class=\"num\">Champion's odds</th></tr></thead><tbody id=\"a-odds\"></tbody></table>\n      </div>\n    </div>\n    <div class=\"card\" style=\"margin-top:16px\">\n      <div class=\"card-head\"><h2>Results in the database</h2><span class=\"sub\">Bouts per season</span></div>\n      <div style=\"overflow-x:auto\"><table>\n        <thead><tr><th>Season</th><th class=\"num\">Tournaments</th><th class=\"num lg\">Dual meets</th><th class=\"num\">Sectionals</th><th class=\"num\">Districts</th><th class=\"num\">State</th><th class=\"num lg\">Middle school</th></tr></thead>\n        <tbody id=\"a-data\"></tbody>\n      </table></div>\n    </div>\n    <div class=\"card acc-how\" style=\"margin-top:16px\">\n      <div class=\"card-head\"><h2>How the test works</h2></div>\n      <ul>\n        <li><strong>Blend</strong> is the rating plus each wrestler's official season record, district finish, grade and last year's state finish. Its weights are learned only from earlier seasons, with recent seasons counting most, and the rating counts for more when we have more of both wrestlers' bouts.</li>\n        <li><strong>Rating alone</strong> uses only bout results: every bout moves both wrestlers. A pin, tech fall or major counts for more than a close decision, and forfeits, injury defaults and byes don't count.</li>\n        <li><strong>Record</strong> and <strong>District</strong> are simple guesses for comparison: pick the wrestler with the better season record, or the better district finish.</li>\n        <li>Regular-season bouts count half as much as postseason bouts. Ratings carry into the next season with more uncertainty. 2019-20 had no state tournament.</li>\n      </ul>\n    </div>\n  </section>\n</main>\n<footer><div class=\"in\">\n  <div><b><span class=\"bwf\">wrestle<span>.live</span></span> <small>RANKINGS</small></b><p>Ratings and rankings built from real tournament results. Now covering Ohio high school and middle school, 2010-11 to today.</p><p>Records count only the bouts in our database.</p></div>\n  <div><h2>Explore</h2><ul><li><a href=\"#rankings\">Rankings</a></li><li><a href=\"#rankings/p4p\">Pound-for-pound</a></li><li><a href=\"#teams\">Teams</a></li><li><a href=\"#events\">Events</a></li><li><a href=\"#matchups\">Matchups</a></li><li><a href=\"#odds\">State bracket odds</a></li></ul></div>\n  <div><h2>About</h2><ul><li><a href=\"#accuracy\">How accurate is it?</a></li><li><a href=\"#home\">How to read the numbers</a></li></ul><p style=\"margin-top:8px\">Missing results or a correction? Email <a href=\"mailto:contactwrestlelive@gmail.com?subject=Wrestle%20Live%20Rankings\">contactwrestlelive@gmail.com</a> with your tournament's final results or what needs fixed.</p></div>\n  <div class=\"foot-host\"><p><strong>Running a tournament?</strong> wrestle.live hosts brackets, live results and registration for tournament directors.</p><a class=\"btn\" href=\"https://wrestle.live/\" target=\"_blank\" rel=\"noopener\">Host on wrestle.live<span aria-hidden=\"true\"> \u2197</span><span class=\"sr\"> (opens in a new tab)</span></a></div>\n</div></footer>\n\n");

(function(){
  const S = {season:null, g:'M', div:'all', grade:'all', wt:157, showAll:false, asof:'final',
             pSeason:null, pg:'M', tSeason:null, tg:'M', tdiv:'all', tAll:false, team:null, tmSeason:null, tmG:'M',
             eSeason:null, etype:'all', eg:'all', event:null, evWt:null, wid:null, mSeason:null, ca:null, cb:null,
             oSeason:null, oDiv:'I', oWt:null};
  let ROWS=[], META=null, TEAMS=[], EVENTS=[], ODDS=null, MSROWS=[];
  const SERIES=new Map();   // the same event across seasons
  const BYID=new Map(), TBY=new Map(), EVBY=new Map(), SEASON={}, WEEK={}, MSBY=new Map();
  const hasProfile = id => BYID.has(id) || MSBY.has(id);
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
    el.innerHTML = items.map(([v,l]) => `<button type="button" data-v="${v}" aria-pressed="${String(v)===String(cur)}">${l}</button>`).join('');
    el.onclick = e => { const b = e.target.closest('button'); if (b) on(b.dataset.v); };
  }
  function pills(el, list, cur, attr, on){
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
    const bt = Object.entries(META.backtest||{}).filter(([s])=>s>='2021-22');
    const acc = bt.length ? bt.reduce((s,[,v])=>s+(v.blend_acc??v.acc)*v.n,0)/bt.reduce((s,[,v])=>s+v.n,0) : null;
    $('h-lede').textContent = `Ratings, career histories and state bracket odds from ${fmtN(META.bouts)} bouts, ${META.seasons[0]} to ${latest}. Updated through the season.`;
    $('h-strip').innerHTML = [[fmtN(META.bouts),`bouts in the database${META.levels&&META.levels.MS?` · ${fmtN(META.levels.MS)} middle school`:''}`],[fmtN(META.wrestlers),'wrestlers with a profile'],[META.seasons.length,`seasons, ${META.seasons[0]} to ${latest}`],
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
    const teams = TEAMS.filter(t=>t.season===latest&&t.g==='M').sort((a,b)=>a.rank-b.rank).slice(0,5);
    seg($('h-g'), [['M','Boys'],['F','Girls']], S.hg||'M', v=>{ S.hg=v; renderHome(); });
    // before the new season's first weekly list, the No. 1s come from the preseason projection
    const PREH = META.pre_season && !((META.weekly||{})[META.pre_season]||[]).length;
    if (PREH && !PRE_READY){ loadPre().then(d=>{ PRE_READY = d; if (!$('v-home').hidden) renderHome(); }); }
    let ones;
    if (PREH && PRE_READY){
      const best = new Map(); for (const r of PRE_READY.list) if (r.g===(S.hg||'M') && (!best.has(r.wt) || r.r > best.get(r.wt).r)) best.set(r.wt, r);
      ones = [...best.values()].sort((a,b)=>a.wt-b.wt).map(r=>({...r, place:r.lastPlace}));
    } else ones = PREH ? [] : ROWS.filter(r=>r.season===latest && r.g===(S.hg||'M') && r.ranked && r.rank===1).sort((a,b)=>a.wt-b.wt);
    $('h-ones').innerHTML = PREH ? `No. 1 at every weight · ${esc(META.pre_season)} <span class="chip prov" style="vertical-align:middle">Projected</span>` : `No. 1 at every weight · ${esc(latest)}`;
    $('h-ones-sub').textContent = PREH ? `Preseason projection from ${META.pre_season ? META.sim_next_from : ''} results. Chips show last season's state finish. Updates once the season's first results are in.` : '';
    $('h-ones-sub').hidden = !PREH;
    $('h-ones-all').href = PREH ? '#rankings/pre' : ones.length ? `#rankings/HS/${latest}/${S.hg||'M'}/${ones[0].wt}` : '#rankings';
    $('h-onesgrid').innerHTML = ones.map(r=>`<a href="${hW(r.id)}"><span class="top"><span class="wt">${r.wt}<small>lbs</small></span>${badge(r.tid, r.team, 'l')}</span><span class="nm">${esc(r.name)}</span><span class="tm" title="${esc(r.team)}">${esc(r.team)}</span><span class="ft">${r.place?`<span class="chip ${r.place<=3?'p'+r.place:''} champtag">${r.place===1?'State champ':r.place===2?'State runner-up':'State '+ord(r.place)}</span>`:''}<span class="rt">${fmtS(r.r)}<small>rating</small></span></span></a>`).join('');
    // before the new season's first weekly list, the leaders come from the preseason projection too
    const PL = PREH && PRE_READY;
    // short headings so the three cards line up; the season (and the Projected tag) sit on a small line underneath
    const tag = `<span class="ch-sea">${PL ? `${esc(META.pre_season)} <span class="chip prov">Projected</span>` : esc(latest)}</span>`;
    let pB = boys, pG = girls, tm = teams;
    if (PL){
      const pp = g => PRE_READY.list.filter(r=>r.g===g && r.pp!=null).sort((a,b)=>b.pp-a.pp).map(r=>({...r, place:r.lastPlace}));
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
      list = P.list.filter(r=>r.g===S.g && r.pp!=null);
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
      const all = P.list.filter(r=>r.g===S.g);
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
        <td class="lg">${tlink(r.tid,r.team||'')}</td><td class="num lg">${r.gr ? ord(r.gr) : dash}</td><td class="lg">${r.div?esc(r.div):dash}</td>
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
        <div class="nm" style="min-width:0">${wlink(r.id,r.name)}<div class="sub" style="font-size:14px">${badge(r.tid, r.team, 's')} ${tlink(r.tid,r.team)}${PRE && r.from ? ` <span class="chip">Transfer from ${esc(r.from)}</span>` : ''}${P4P?' · '+r.wt+' lbs':r.div?' · Division '+esc(r.div):''}${PRE ? '' : ` · ${r.w}-${r.l}`}</div></div>
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
    let list = TEAMS.filter(t=>t.season===S.tSeason&&t.g===S.tg).sort((a,b)=>a.rank-b.rank);
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
    if (!recs.length){ $('tm-name').textContent='Team not found'; return; }
    const seasons = [...new Set(recs.filter(r=>r.g===S.tmG).map(r=>r.season))].sort().reverse();
    if (!seasons.length){ S.tmG = recs[0].g; return renderTeam(); }
    if (!seasons.includes(S.tmSeason)) S.tmSeason = seasons[0];
    const t = recs.find(r=>r.season===S.tmSeason && r.g===S.tmG);
    $('tm-name').textContent = t.name;
    const nd = S.tmG==='M' && S.tmSeason===seasons[0] ? divOf(S.team) : null;   // moved in OHSAA's next alignment?
    $('tm-eyebrow').textContent = `Team · ${t.div ? 'Division '+t.div+' · ' : ''}${S.tmG==='M'?'Boys':'Girls'}${nd && t.div && nd!==t.div ? ` · Division ${nd} in ${META.pre_season}` : ''}`;
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
    const RK = rankSeasons().includes(S.tmSeason);   // state-only seasons (before 2011-12) have no team ranking
    $('tm-tiles').innerHTML = [
      RK ? ['Team rank', '#'+t.rank, `strength ${t.lineup_pp.toLocaleString()}`] : ['Results', 'State only', 'only the state tournament is in our results'],
      RK ? ['Ranked wrestlers', t.ranked, `${t.weights} weights filled`] : ['State bouts', ROWS.filter(r=>r.tid===S.team&&r.season===S.tmSeason&&r.g===S.tmG).reduce((n,r)=>n+(r.w||0)+(r.l||0),0), 'wins and losses at state'],
      ['State qualifiers', t.sq, `${t.placers} placers`],
      ['State champions', t.champs, S.tmSeason]
    ].map(([k,v,s],i)=>i===0 && RK
      ? `<a class="card tile tilelink" href="#teams/${t.season}/${t.g}/${t.tid}" title="See the full ${t.season} team rankings"><div class="k">${k} <span class="go" aria-hidden="true">→</span></div><div class="v">${esc(v)}</div><div class="s">${esc(s)}</div></a>`
      : `<div class="card tile"><div class="k">${k}</div><div class="v">${esc(v)}</div><div class="s">${esc(s)}</div></div>`).join('');
    const roster = ROWS.filter(r=>r.tid===S.team && r.season===S.tmSeason && r.g===S.tmG);
    const best = new Map(); for (const r of roster.filter(r=>r.wt)) { const c=best.get(r.wt); if (!c || (r.pp??-9e9) > (c.pp??-9e9)) best.set(r.wt, r); }
    $('tm-lineup').innerHTML = [...best.values()].sort((a,b)=>a.wt-b.wt).map(r=>`<tr><td class="num"><strong>${r.wt}</strong></td>
      <td class="who">${wlink(r.id,r.name)}${sl([`${r.w}-${r.l}`, placeText(r.place)])}</td><td class="num lg">${r.w}-${r.l}</td><td class="num lg">${r.r}</td>
      <td class="num">${r.ranked?`<a class="lnk plain" href="#rankings/HS/${r.season}/${r.g}/${r.wt}/${r.id}" title="See the ${r.wt} rankings">#${r.rank}</a>`:'–'}</td><td class="num">${r.pp!=null&&r.ranked?`<a class="lnk plain" href="#p4p/${r.season}/${r.g}/${r.id}" title="See the pound-for-pound rankings">${r.pp}</a>`:(r.pp??'–')}</td><td class="lg">${placeChip(r.place)}</td></tr>`).join('') || empty(7, 'No ranked wrestlers this season.');
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
  function rankSeasons(){ if (!META._rankSeasons){ const n = new Map(); for (const r of ROWS) if (r.ranked) n.set(r.season, (n.get(r.season)||0)+1);
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
    const ttop = (TBY.get(S.team)||[]).filter(t=>t.g===S.tmG && rankSeasons().includes(t.season)).sort((a,b)=>a.rank-b.rank)[0];
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
    seasonOpts($('e-season'), META.seasons.slice().reverse(), S.eSeason);
    seg($('e-level'), [['all','All'],['HS','High school'],['MS','Middle school']], S.elv||'all', v=>{S.elv=v; renderEvents();});
    $('e-type').hidden = S.elv==='MS';
    seg($('e-type'), [['all','All'],['tournament','Tournaments'],['dual','Duals'],['sectional','Sectionals'],['district','Districts'],['state','State']], S.etype, v=>{S.etype=v; renderEvents();});
    seg($('e-gender'), [['all','All'],['M','Boys'],['F','Girls']], S.eg, v=>{S.eg=v; renderEvents();});
    let list = EVENTS.filter(e=>e.season===S.eSeason);
    if (S.elv && S.elv!=='all') list = list.filter(e=>(e.lv||'HS')===S.elv);
    if (S.etype!=='all' && S.elv!=='MS') list = list.filter(e=>e.type===S.etype && e.lv!=='MS');
    if (S.eg!=='all') list = list.filter(e=>e.g===S.eg);
    $('e-title').textContent = S.eSeason;
    const fq = $('e-q').value.trim().toLowerCase();
    if (fq) list = list.filter(e=>{ const t = townOf(e); return (e.name + ' ' + (e.venue||'') + (t ? ' ' + t[0] + ' ' + t[1] + ' county' : '')).toLowerCase().includes(fq); });
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
    $('e-count').textContent = `${list.length} events${pt ? ` within ${R} miles of ${pt.name}` : ''} · ${list.reduce((s,e)=>s+e.bouts,0).toLocaleString()} bouts`;
    let lastD = null;
    const dayName = d => new Date(d+'T12:00:00').toLocaleDateString('en-US',{weekday:'long', month:'long', day:'numeric', year:'numeric'});
    const TR = {state:0, district:1, sectional:2, dual:3, tournament:4}, DR = d => ({I:1, II:2, III:3})[d] || 9;
    list = list.slice().sort((a,b)=> b.date.localeCompare(a.date) || (TR[a.type]??5)-(TR[b.type]??5) || (a.g==='F')-(b.g==='F') || DR(a.div)-DR(b.div)
      || evName(a.name).localeCompare(evName(b.name)));
    const where = e => { const t = townOf(e); return t ? `${esc(t[0])}${pt ? ` <span class="sub">· ${Math.round(e.dist)} mi</span>` : ''}` : ''; };
    $('e-body').innerHTML = list.map(e=>{ const hd = e.date!==lastD ? `<tr class="dgrp"><th colspan="4" scope="colgroup">${dayName(e.date)}</th></tr>` : ''; lastD = e.date;
      const t = townOf(e);
      return hd + `<tr><td class="who">${elink(e.eid,e.name)}${sl([evTag(e), t ? esc(t[0]) + (pt ? ` · ${Math.round(e.dist)} mi` : '') : ''])}</td><td class="lg">${where(e) || dash}</td><td class="lg">${evTag(e)}</td><td class="num">${e.bouts.toLocaleString()}</td></tr>`; }).join('')
      || empty(4, pt ? `No events within ${R} miles of ${esc(pt.name)} this season. Try a wider distance or another season.` : 'No events match these filters.');
  }
  async function renderEvent(){
    const e = EVBY.get(S.event); if (!e) return;
    $('ev-eyebrow').textContent = `${evType(e)}${e.div?' · Division '+e.div:''}${e.g==='F'?' · Girls':''} · ${e.season}`;
    $('ev-name').textContent = evName(e.name);
    $('ev-sub').textContent = `${fmtDate(e.date)} · ${e.bouts.toLocaleString()} bouts`;
    loadPlaces().then(()=>{ if (S.event!==e.eid) return; const t = townOf(e);
      $('ev-where').hidden = !t && !e.venue && e.type!=='dual';
      if (!t && !e.venue){ $('ev-where').textContent = 'Location not recorded'; return; }
      $('ev-where').innerHTML = [e.venue ? esc(e.venue) : '', t ? `${esc(t[0])}, ${esc(t[1])} County` : ''].filter(Boolean).join(' · ')
        + (t ? ` · <a href="#events/near/${encodeURIComponent(t[0])}/${e.season}">Events near ${esc(t[0])}</a>` : ''); });
    { const all = (e.sid!=null ? SERIES.get(e.sid) : null) || [e];
      const others = all.slice().sort((a,b)=>b.date.localeCompare(a.date));
      const perSeason = new Map(); for (const x of others) perSeason.set(x.season, (perSeason.get(x.season)||0)+1);
      const tag = x => perSeason.get(x.season) > 1 ? ' · ' + ((x.name.match(/\(([^)]*)\)\s*$/)||[])[1] || x.name.split(/ - | · /).at(-1)).replace(/^(Quarterfinals?|Final)\s*[-·]\s*/,'') : '';
      $('ev-years').hidden = others.length < 2;
      $('ev-years').innerHTML = `<span class="k">Other years</span>` + others.map(x=>`<a href="${hE(x.eid)}"${x.eid===e.eid?' aria-current="page"':''}>${x.season}${esc(tag(x))}</a>`).join(''); }
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
  const wlBox = (id, before) => { let b = $(id); if (!b){ b = document.createElement('div'); b.id = id; before.before(b); } return b; };
  const wlName = (X, w) => { const x = X.w[w]; return !x ? 'Bye' : x[1] && hasProfile(x[1]) ? wlink(x[1], x[0]) : `<span style="font-weight:600">${esc(x[0])}</span>`; };
  const wlTeam = (X, w) => { const x = X.w[w]; const t = x && X.teams[x[2]]; return t ? esc(t[0]) : ''; };
  const WL_PTS = {fall:6, ff:6, mff:6, inj:6, dq:6, tf:5, md:4, dec:3, sv:3};
  const wlRes = b => b[15] ? `${RTL[b[15]] || ''}${b[16] ? ' ' + esc(b[16]) : ''}` : '';
  async function wlEvent(e, view){
    const top = wlBox('ev-wl', $('ev-years')), wbox = wlBox('ev-wlw', $('ev-grid'));
    top.hidden = true; wbox.hidden = true; wbox.innerHTML = '';
    const I = await loadWLI(), ix = I[e.eid]; if (!ix || S.event !== e.eid) return;
    const [, live, until] = ix, open = new Date().toISOString().slice(0,10) <= until;
    top.hidden = false;
    top.innerHTML = `<span class="wl-chip off">Official results</span><span class="wl-chip">Run on wrestle<b>.live</b></span>${open ? `<a class="lnk" href="${esc(live)}" target="_blank" rel="noopener">Event page on wrestle.live<span aria-hidden="true"> ↗</span><span class="sr"> (opens in a new tab)</span></a><span class="sub">shown until ${fmtDate(until)}</span>` : ''}`;
    const X = await loadWL(e.eid); if (!X || S.event !== e.eid) return;
    if (view === 'dual') wlDual(e, X);
    else if (view > 0) wlWeight(e, X, view, wbox);
    const q = new URLSearchParams(location.search).get('bout'); if (q && X.bouts.some(b=>b[0]===q)) wlOpenBout(e, X, q);
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
        const pts = v.points ? `<b class="s${to}">+${v.points}${to !== s && to != null ? ' ' + esc(X.w[b[8 + to]]?.[0].split(' ').at(-1) || '') : ''}</b>` : '';
        rows.push(`<li><span class="sub">${esc(v.clock || '')}</span><span><b>${esc(X.w[v.wrestlerId]?.[0].split(' ').at(-1) || '')}</b> · ${esc(wlMove(v.move))}</span>${pts}<span class="sc">${(v.score || []).join('–')}</span></li>`); }
      const S2 = k => `<td><b>${st[0][k]}</b></td>`;
      body = `<div class="wl-pbp"><ol class="wl-ev">${rows.join('')}</ol>
        <div class="wl-st"><table><thead><tr><th>${esc(X.w[b[8]]?.[0].split(' ').at(-1) || '')}</th><th></th><th>${esc(X.w[b[9]]?.[0].split(' ').at(-1) || '')}</th></tr></thead><tbody>
          ${[['td','Takedowns'],['e','Escapes'],['r','Reversals'],['nf','Near-fall points'],['pen','Penalty points received']].map(([k, l]) => `<tr><td><b>${st[0][k]}</b></td><td class="sub">${l}</td><td><b>${st[1][k]}</b></td></tr>`).join('')}
        </tbody></table>
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
        ${teams.map((t, i) => `<tr><td class="rk">${rk(i)}</td><td><div class="whoflex">${badge(t.tid, t.name, 's')}<span>${t.tid != null ? tlink(t.tid, t.name) : esc(t.name)}</span></div></td>
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
    return msr.slice().reverse().map(r=>`<tr><td style="white-space:nowrap">${r.season} <span class="chip">MS</span>${yrChip(r.gr)}<div class="subline">${tlink(r.tid,r.team)}</div></td><td class="num">${r.wt??'–'}</td>
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
    $('w-sub').innerHTML = `${badge(last.tid, last.team, 'm')} ${tlink(last.tid,last.team)} · in the database ${msr[0].season}${msr.length>1?' to '+last.season:''}`;
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
      ${bs.slice().reverse().map(b=>{ const won=b[3]===wid; const o=won?b[4]:b[3], ot=won?b[6]:b[5];
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

  /* ---------- compare ---------- */
  function findW(q, limit){
    q = q.trim().toLowerCase(); if (q.length<3) return [];
    const seen = new Map();
    for (const r of ROWS) if ((r.name+' '+r.team).toLowerCase().includes(q)){ const c=seen.get(r.id); if(!c||r.season>c.season) seen.set(r.id,r); }
    for (const r of MSROWS) if (!BYID.has(r.id) && (r.name+' '+r.team).toLowerCase().includes(q)){ const c=seen.get(r.id); if(!c||r.season>c.season) seen.set(r.id,{...r, ms:true}); }
    return [...seen.values()].sort((a,b)=>b.season.localeCompare(a.season) || (b.pp??-9e9)-(a.pp??-9e9)).slice(0,limit);
  }
  function picker(inp, box, key){
    inp.setAttribute('aria-controls', box.id);
    inp.onkeydown = e => { if (e.key==='Escape'){ box.hidden = true; } };
    inp.oninput = () => { const list = findW(inp.value, 10); box.hidden = !list.length;
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
      <div style="display:flex;justify-content:space-between;margin-top:14px;font-weight:700"><span style="color:var(--blue)">${pa}%</span><span class="sub" style="font-weight:600;font-size:13px">Win probability${same?'':' (latest ratings, different seasons)'}</span><span style="color:var(--orange)">${100-pa}%</span></div>
      <div class="prob" role="img" aria-label="Win probability ${pa} to ${100-pa}"><div style="width:${100*p}%;background:var(--blue)"></div><div style="width:${100-100*p}%;background:var(--orange)"></div></div></div>
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
    $('c-mt').textContent = meet.length ? `${a.name.split(' ').at(-1)} leads ${aWins}-${meet.length-aWins}`.replace('leads 0-0','') : '';
    $('c-meet').innerHTML = meet.length ? meet.reverse().map(([x,won,d])=>{ const e=EVBY.get(x[0]);
      return `<div class="match"><span class="wl ${won?'W':'L'}" aria-hidden="true">${won?'A':'B'}</span><span class="sr">${won?a.name:b.name} won</span><div>${e?elink(e.eid,e.name):''}<div class="meta">${fmtShort(e?.date)} · ${esc(d.rounds[x[2]]||'')}</div></div><div class="res">${score(d.rt[x[7]], x[8])}</div></div>`; }).join('')
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
    const q = $('s-q').value.trim().toLowerCase();
    if (q.length < 3){ $('s-out').innerHTML = `<p class="sub">Type at least 3 letters. Wrestlers include ranked wrestlers and state qualifiers from ${META.seasons[0]} to ${META.seasons.at(-1)}.</p>`; return; }
    const ws = findW(q, 15);
    const tseen = new Map(); for (const t of TEAMS) if (t.name.toLowerCase().includes(q)){ const c=tseen.get(t.tid); if(!c||t.season>c.season) tseen.set(t.tid,t); }
    const ts = [...tseen.values()].slice(0,10);
    const es = EVENTS.filter(e=>e.name.toLowerCase().includes(q)).sort((a,b)=>b.date.localeCompare(a.date)).slice(0,15);
    $('live').textContent = `${ws.length} wrestlers, ${ts.length} teams, ${es.length} events found`;
    const block = (title, body) => `<div class="card"><div class="card-head"><h2>${title}</h2></div>${body}</div>`;
    $('s-out').innerHTML =
      block(`Wrestlers (${ws.length})`, ws.length ? `<div class="results">${ws.map(r=>`<a href="${hW(r.id)}"><span class="whoflex">${badge(r.tid, r.team, 's')}<span><strong>${esc(r.name)}</strong> <span class="sub">${esc(r.team)}</span></span></span><span class="sub">${r.season} · ${r.wt??''}</span></a>`).join('')}</div>` : '<p class="loading">No wrestlers match.</p>') +
      block(`Teams (${ts.length})`, ts.length ? `<div class="results">${ts.map(t=>`<a href="${hT(t.tid)}"><span class="whoflex">${badge(t.tid, t.name, 's')}<strong>${esc(t.name)}</strong></span><span class="sub">${t.div?'D-'+t.div+' · ':''}${t.season}</span></a>`).join('')}</div>` : '<p class="loading">No teams match.</p>') +
      block(`Events (${es.length})`, es.length ? `<div class="results">${es.map(e=>`<a href="${hE(e.eid)}"><span><strong>${esc(evName(e.name))}</strong></span><span class="sub">${fmtShort(e.date)}, ${e.date.slice(0,4)} · ${TYPEL[e.type]||e.type}</span></a>`).join('')}</div>` : '<p class="loading">No events match.</p>');
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
      const hits = Object.entries(d.teams).filter(([tid,[nm]])=>nm.toLowerCase().includes(q) && (d.byTeam.get(+tid)||[]).some(x=>x.g===S2.g)).slice(0,12);
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
    $('sim-season').innerHTML = seasons.map(s=>`<option value="${s}" ${s===S2.season?'selected':''}>${s}${s===META.sim_next?' (projected)':''}</option>`).join('');
    $('sim-proj').hidden = !projected;
    if (projected) $('sim-proj').innerHTML = `<strong>${META.sim_next} is projected from ${META.sim_next_from}.</strong> Seniors are removed, everyone else moves up a grade with the typical rating gain for that grade and to the weight wrestlers at their weight usually move to, and incoming freshmen start from their 8th-grade rating at the high school their middle school feeds. Wrestlers whose grade we don't know are marked when they may have graduated. Change any spot to match the real lineup.`;
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
      const rs = S2.season === META.sim_next ? META.sim_next_from : S2.season;
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
    const evSeason = S2.season === META.sim_next ? META.sim_next_from : S2.season;
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
  const VIEWS = ['home','rankings','odds','teams','team','events','event','wrestler','sim','search','accuracy'];
  const TABOF = {team:'teams', event:'events'};
  const inkOn = hex => { const c = hex.replace('#',''); const [r,g,b] = [0,2,4].map(i=>parseInt(c.slice(i,i+2),16)/255).map(x=>x<=0.03928?x/12.92:((x+0.055)/1.055)**2.4);
    const L = 0.2126*r+0.7152*g+0.0722*b, dark = 0.0089;   // relative luminance of #12161C
    return (1.05)/(L+0.05) >= (L+0.05)/(dark+0.05) ? '#FFFFFF' : '#12161C'; };   // pick the higher-contrast ink
  const RENDER = {home:renderHome, rankings:renderRankings, odds:renderOdds, teams:renderTeams, team:renderTeam, events:renderEvents, event:renderEvent,
    wrestler:renderWrestler, sim:renderSim, search:renderSearch, accuracy:renderAccuracy};
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
    let parts = RH().slice(1).split('/');
    // old addresses still work: #p4p/... -> Rankings (pound-for-pound), #compare/a/b -> Matchups (wrestlers), #sim/... -> Matchups
    if (parts[0]==='p4p'){ S.rview='p4p'; S.div='all'; S.grade='all'; S.showAll=false; if (parts[1]) S.season=parts[1]; if (parts[2]) S.g = parts[2]==='F'?'F':'M'; const hl = parts[3]; parts = ['rankings','p4p']; history.replaceState(null,'','#rankings/p4p'); S.hlP = hl ? +hl : null; }
    if (parts[0]==='compare'){ parts = ['matchups','w', ...parts.slice(1)]; history.replaceState(null,'','#'+parts.join('/')); }
    if (parts[0]==='matchups') parts[0] = 'sim';
    let v = parts[0]; if (!VIEWS.includes(v)) v = 'home';
    const arg = parts.slice(1).filter(x=>x!=='');
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
    if (v==='team' && arg[0] && TBY.has(+arg[0])){ S.team=+arg[0];
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
  const toSearch = q => { $('s-q').value = q; if (RH()==='#search') renderSearch(); else go('#search'); };
  function typeahead(inp, box){
    const close = () => { box.hidden = true; box.innerHTML = ''; };
    inp.addEventListener('input', () => {
      const q = inp.value.trim().toLowerCase();
      if (q.length < 3){ close(); return; }
      const ws = findW(q, 6);
      const tseen = new Map(); for (const t of TEAMS) if (t.name.toLowerCase().includes(q)){ const c = tseen.get(t.tid); if (!c || t.season > c.season) tseen.set(t.tid, t); }
      const ts = [...tseen.values()].slice(0, 4);
      const es = EVENTS.filter(e => e.name.toLowerCase().includes(q)).sort((a,b)=>b.date.localeCompare(a.date)).slice(0, 4);
      const n = ws.length + ts.length + es.length;
      box.innerHTML = (ws.length ? '<div class="grp">Wrestlers</div>' + ws.map(r=>`<a href="${hW(r.id)}"><span class="whoflex">${badge(r.tid, r.team, 's')}<span><strong>${esc(r.name)}</strong> <span class="sub">${esc(r.team)}</span></span></span><span class="sub">${r.ms?'MS · ':''}${r.season} · ${r.wt??''}</span></a>`).join('') : '')
        + (ts.length ? '<div class="grp">Teams</div>' + ts.map(t=>`<a href="${hT(t.tid)}"><span class="whoflex">${badge(t.tid, t.name, 's')}<strong>${esc(t.name)}</strong></span><span class="sub">${t.div?'D-'+t.div:''}</span></a>`).join('') : '')
        + (es.length ? '<div class="grp">Events</div>' + es.map(e=>`<a href="${hE(e.eid)}"><strong>${esc(evName(e.name))}</strong><span class="sub">${fmtShort(e.date)}, ${e.date.slice(0,4)}</span></a>`).join('') : '')
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
  $('s-q').oninput = renderSearch;
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
    team: id => { const r = latestOf(TBY.get(id)); return r ? slug(r.name) : ''; },
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

  const table = d => { const cols = d[0]; return d.slice(1).map(a => Object.fromEntries(cols.map((c,i)=>[c,a[i]]))); };
  // middle school records load in the background: pages that need them redraw when they arrive
  let started = false;
  const msLoad = fetch('ms.json').then(r=>r.ok ? r.json() : null).catch(()=>null).then(ms=>{
    if (!ms) return; MSROWS = table(ms);
    for (const r of MSROWS) (MSBY.get(r.id) || MSBY.set(r.id,[]).get(r.id)).push(r);
    const v = RH().slice(1).split('/')[0];
    if (started && (v==='wrestler' || (v==='rankings' && S.rview==='ms') || v==='search')) route();
  });
  const msFirst = /^#(rankings\/MS|wrestler\/)/.test(RH()) ? msLoad : null;   // a middle school page asked for directly waits for it
  Promise.all(['data.json','meta.json','teams.json','events.json'].map(f=>fetch(f).then(r=>{ if(!r.ok) throw new Error(f+' '+r.status); return r.json(); }))
    .concat(loadSchools().then(s=>{ SCHOOLS_READY = s; }), msFirst))
  .then(([d,m,t,e])=>{
    ROWS = table(d); META = m; TEAMS = table(t); EVENTS = table(e);
    for (const r of ROWS) (BYID.get(r.id) || BYID.set(r.id,[]).get(r.id)).push(r);
    for (const x of TEAMS){ (TBY.get(x.tid) || TBY.set(x.tid,[]).get(x.tid)).push(x); TIDN.set(x.name, x.tid); }
    for (const x of EVENTS){ EVBY.set(x.eid, x); if (x.sid!=null) (SERIES.get(x.sid) || SERIES.set(x.sid,[]).get(x.sid)).push(x); }
    const latest = META.seasons[META.seasons.length-1];
    S.season = S.pSeason = S.tSeason = S.eSeason = latest;
    // until the new season has weekly lists, Rankings opens on the preseason projection
    if (META.pre_season && !((META.weekly||{})[META.pre_season]||[]).length) S.season = S.tSeason = 'pre';
    const four = [...BYID.entries()].filter(([,v])=>v.length>=4 && v.some(r=>r.season===latest)).sort((a,b)=>Math.max(...b[1].map(r=>r.pp??0))-Math.max(...a[1].map(r=>r.pp??0)));
    S.wid = four.length ? four[0][0] : ROWS[0].id;
    S.ca = S.wid; { const a = BYID.get(S.wid).find(r=>r.season===latest); const c = ROWS.filter(r=>r.season===latest && r.g===a.g && r.wt===a.wt && r.id!==a.id && r.ranked).sort((x,y)=>x.rank-y.rank); S.cb = c[0]?.id ?? null; }
    const tops = TEAMS.filter(x=>x.season===latest && x.g==='M').sort((a,b)=>a.rank-b.rank);
    S.team = tops[0]?.tid; S.tmSeason = latest;
    const st = EVENTS.filter(x=>x.season===latest && x.type==='state'); S.event = (st[0]||EVENTS[EVENTS.length-1]).eid;
    $('loading').hidden = true;
    started = true;
    { const c = canonicalPath(); if (c && c !== location.pathname) history.replaceState(null, '', c); }   // old # links, renamed slugs
    document.getElementById('seo')?.remove();   // the page's built-in text, shown until the app is running
    route();
  }).catch(err => { $('loading').textContent = 'The rankings data did not load. Reload the page to try again. (' + err.message + ')'; });
})();


if (location.hostname === 'rankings.wrestle.live') {
  const cf = document.createElement('script');
  cf.type = 'module';
  cf.src = 'https://static.cloudflareinsights.com/beacon.min.js';
  cf.setAttribute('data-cf-beacon', '{"token": "2d64a0e79e8a44d08b94832cb701d72e"}');
  document.body.appendChild(cf);
}
