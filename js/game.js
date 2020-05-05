function getTimestamp() {
    let d = new Date();
    return d.getTime();
}

function randomDivId() {
    let d = Math.floor(Math.random() * 4);
    let n = Math.floor(Math.random() * 6) + 1;
    return `#slot-${d}${n}`;
}

let hits = 0;
let firstHitTime = 0;

// Start game =============================================

$("#button-reload").click(function () {

    hits = 0;
    firstHitTime = 0;
    let miss = 0;

    // FIXME: тут надо определять при первом клике firstHitTime
    firstHitTime = getTimestamp();

    $(".align-text-bottom").removeClass("d-none");
    $("#win-message").addClass("d-none");

    const numDivs = 36;
    const maxHits = 10;

    round();

    // round function =============================================

    function round() {

        // FIXME: надо бы убрать "target" прежде чем искать новый
        // FIXME: убирать текст со старых таргетов. Кажется есть .text?

        $(".target").text("").removeClass(['target']);

        hits++;

        let divSelector = randomDivId();
        $(divSelector).addClass("target").text(hits);
        // TODO: помечать target текущим номером


        if (hits > maxHits) {
            endGame();
        }
    }

    // endgame function =============================================

    function endGame() {
        // FIXME: спрятать игровое поле сначала

        let totalPlayedMillis = getTimestamp() - firstHitTime;
        let totalPlayedSeconds = Number(totalPlayedMillis / 1000).toPrecision(3);
        $("#total-time-played").text(totalPlayedSeconds);

        $(".align-text-bottom").addClass("d-none");
        $("#win-message").removeClass("d-none");
    }

    // handleClick function =============================================

    $(".game-field").click(handleClick);

    function handleClick(event) {

        if ($(event.target).hasClass("target")) {
            //            hits = hits + 1;
            round();
        } else {}

        // TODO: как-то отмечать если мы промахнулись? См CSS класс .miss
    }


});
