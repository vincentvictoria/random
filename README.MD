Random - ES Module for Deno, Node and Web
=

Usage
-

```js
import Random from './Random.js';

const r = new Random();
const r = new Random( alea ); // you may pass a random generator function
const r = new Random( Math.random ); // defaults to Math.random

r.int( 0, 10 ); // random integer from 0 to 9
r.real( 0, 3 ); // random real number from 0 to 3 (exclusive)

r.string( 5 );  // random string with length of 5 (eg: ku8rz, 9eirk)
r.string( 5, Random.UPPER_ALPHABETS ); // random string from uppercase alphabets
r.string( 5, Random.UNAMBIGOUS_UPPER_ALPHA_NUMERICS ); // unambigous: No 0, O, 1, I, 3, S..

r.pick( 2, 3, 5, 7, 11 ); // pick one from arguments (eg: 7)
r.pick( [ "a", "e", "i", "o", "u" ]) // you may pass an array

r.weighted( 0.3, 0.7 ) // 0 has 30% chance of getting picked. 1, 70%
r.weighted( 0.2, 0.1, 0.5 )
```

Issues
-
For any bug reports or feature requests please
[post an issue on GitHub][issues-url].

Author
-
[**Vincent**](https://www.vincentvictoria.com/)
<br/>
[![Follow on GitHub][github-follow-img]][github-follow-url]
[![Follow on Twitter][twitter-follow-img]][twitter-follow-url]
<br/>
[![Follow on Stack Exchange][stackexchange-img]][stackoverflow-url]

License
-
MIT License (Expat). See [LICENSE.md](LICENSE.md) for details.

[github-url]: https://github.com/vincentvictoria/random
[readme-url]: https://github.com/vincentvictoria/random#readme
[issues-url]: https://github.com/vincentvictoria/random/issues
[license-url]: https://github.com/vincentvictoria/random/blob/master/LICENSE.md
[actions-url]: https://github.com/vincentvictoria/random/actions
[actions-img]: https://github.com/vincentvictoria/random/workflows/ci/badge.svg?branch=master&event=push
[travis-url]: https://travis-ci.org/vincentvictoria/random
[travis-img]: https://travis-ci.org/vincentvictoria/random.svg?branch=master
[install-img]: https://nodei.co/npm/ende.png?compact=true
[downloads-img]: https://img.shields.io/npm/dt/ende.svg
[license-img]: https://img.shields.io/npm/l/ende.svg
[github-follow-url]: https://github.com/vincentvictoria
[github-follow-img]: https://img.shields.io/github/followers/vincentvictoria.svg?style=social&logo=github&label=Follow
[twitter-follow-url]: https://twitter.com/intent/follow?screen_name=vincentvictoria
[twitter-follow-img]: https://img.shields.io/twitter/follow/vincentvictoria.svg?style=social&logo=twitter&label=Follow
[stackoverflow-url]: https://stackoverflow.com/users/121240
[stackexchange-url]: https://stackexchange.com/users/41681
[stackexchange-img]: https://stackexchange.com/users/flair/41681.png