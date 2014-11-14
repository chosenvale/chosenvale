# The Center for Advanced Musical Studies at Chosen Vale

Built with [Middleman][3] & [Twitter Bootstrap][4].

## Development

*Note to novice programmers: the $ sign indicates a command prompt that's
ready for input. Don't copy this symbol, just the code that follows it.*

1.  Grab the source code.

        $ git clone https://github.com/chosenvale/chosenvale.git && cd chosenvale

2.  Install the gem dependencies. You may need to prefix this with `sudo`
    depending on how you've installed ruby.

        $ bundle install

3.  Run the Middleman server to view your content in your favorite browser at
    http://localhost:4567/

        $ bundle exec middleman server


## Optional steps for mac users

1.  Install [Pow][0] server on your mac.

        $ curl get.pow.cx | sh

2.  Use [powser][2] or [powder][1] to add the chosenvale folder to Pow.

3.  Make changes to the source and see them instantly in your browser at
    http://chosenvale.dev

## Deployment

Make sure you have push privileges and then

    $ bundle exec middleman deploy

This will automatically build the static pages, commit them to the `gh-pages` branch
and push to github.

## A bit more about the languages used

* [Ruby](http://www.ruby-lang.org/en/) ([Try ruby](http://tryruby.org/))
* [Scss](http://sass-lang.com/) and [Compass](http://compass-style.org/)
* [Slim](http://slim-lang.com/)

## License

Copyright (c) 2014 Entio LLC (Montana). MIT Licensed, see [LICENSE][7] for details.

* Middleman is [released under MIT License][5]
* Twitter Boostrap is [released under Apache License][6]

[0]: http://pow.cx/
[1]: https://github.com/rodreegez/powder
[2]: https://github.com/phil-monroe/powser
[3]: http://middlemanapp.com/
[4]: http://twitter.github.com/bootstrap/
[5]: https://github.com/middleman/middleman/blob/master/LICENSE
[6]: https://github.com/twitter/bootstrap/blob/master/LICENSE
[7]: https://github.com/ent-io/middleman_twitter-bootstrap/blob/master/LICENSE
