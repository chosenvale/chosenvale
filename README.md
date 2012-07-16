# [Middleman][3] & [Twitter Bootstrap][4]

## Purpose

To be used as a starting point for precompiled static websites.

## Usage

*Note to novice programmers: the $ sign indicates a command prompt that's
ready for input. Don't copy this symbol, just the code that follows it.*

1.  Grab the source code and put it in your-new-site-name folder. Replace this
    with a folder name that's meaningful to you.

        $ git clone git://github.com/ent-io/middleman_twitter-bootstrap.git your-new-site-name

2.  Open your-new-site-name folder.

        $ cd your-new-site-name

3.  Install the gem dependencies. You may need to prefix this with `sudo`
    depending on how you've installed ruby.

        $ bundle install

4.  Run the Middleman server to view your content in your favorite browser at
    http://localhost:4567/

        $ bundle exec middleman server

5.  When things look the way you want, compile the source code to static files
    for production deployment.

        $ bundle exec middleman build


## Optional steps for mac users

1.  Install [Pow][0] server on your mac.

        $ curl get.pow.cx | sh

2.  Use [powser][2] or [powder][1] to add the your-new-site-name folder to Pow.

3.  Make changes to the source and see them instantly in your browser at
    http://your-new-site-name.dev

## A bit more about the languages used

* [Ruby](http://www.ruby-lang.org/en/) ([Try ruby](http://tryruby.org/))
* [Scss](http://sass-lang.com/) and [Compass](http://compass-style.org/)
* [Slim](http://slim-lang.com/)

## License

Copyright (c) 2010 Alexander Wenzowski. MIT Licensed, see [LICENSE][7] for details.

* Middleman is [released under MIT License][5]
* Twitter Boostrap is [released under Apache License][6]

*Written for Entio LLC (Montana).*

[0]: http://pow.cx/
[1]: https://github.com/rodreegez/powder
[2]: https://github.com/phil-monroe/powser
[3]: http://middlemanapp.com/
[4]: http://twitter.github.com/bootstrap/
[5]: https://github.com/middleman/middleman/blob/master/LICENSE
[6]: https://github.com/twitter/bootstrap/blob/master/LICENSE
[7]: https://github.com/ent-io/middleman_twitter-bootstrap/blob/master/LICENSE
