# TypeORM Embedded Entities Bug

Unable to save a cascading update on a relation that exists on an embedded entity (creation via cascading on the relation, however, works as expected).

The data to trigger this bug is already in a sqlite file.

Run `yarn install` and `yarn start`. Error will occur.

https://github.com/typeorm/typeorm/issues/10578
