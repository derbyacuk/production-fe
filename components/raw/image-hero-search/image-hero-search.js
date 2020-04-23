import autoComplete from '../../../../libs/auto-complete'
import '../../../../libs/auto-complete.scss'
import data from '../../../../libs/example-data.json'

var isHighContrast = $('.search-input-group-outline').length > 0;

new autoComplete({
    selector: 'input.search-input',
    minChars: 1,
    menuClass: isHighContrast ? 'high-contrast' : undefined,
    source: function (term, suggest) {
        term = term.toLowerCase();
        var choices = data;
        var matches = [];
        for (var i = 0; i < choices.length; i++) {
            if (~choices[i].toLowerCase().indexOf(term)) matches.push(choices[i]);
        }
        suggest(matches);
    },
    renderItem: function (item, search) {
        search = search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
        var re = new RegExp("(" + search.split(' ').join('|') + ")", "gi");
        return '<div class="autocomplete-suggestion" data-langname="' + item + '" data-lang="' + item + '" data-val="' + search + '">' + item.replace(re, "<b>$1</b>") + '</div>';
    },
    onSelect: function (event, term, item) {
        $('input.search-input').val($(item).text());
    }
});
