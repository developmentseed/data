
# Data

Experimental meta data manager for documents stored in couchdb. This module was
designed having statistic data records in mind.

- Add meta information such as title, description, source information to
  document properties.
- Define formatting rules for document properties.
- Group document properties in time series.

## Requirements

- [Expresslane](https://github.com/developmentseed/expresslane)
- [Forms](https://github.com/developmentseed/forms)
- [Stash](https://github.com/developmentseed/stash)
- [Backbone](https://github.com/documentcloud/backbone)

## Todo

- We may want to rename this module. Data is very generic and we run into all
  kinds of problems in using it. I. e. we need to resort to 'dataset' when
  refering to concrete instances of data but 'dataset' is actually not a good
  name for these concrete instances of data, but rather 'metadata'. The
  question stands to ask whether we'd like to call this module 'metadata'. The
  scope of this module needs to be better defined.
