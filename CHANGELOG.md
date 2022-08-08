# Changelog

All notable changes to this project will be documented in this file.

## [1.3.0]

### Added

- Added option to switch languages on the Mollie PaymentStatus screen
- Added access to "back" button on the Mollie PaymentStatus screen

### Changed

- Improve reliability of iFrame fields in Credit Card screen

## [1.2.0]

### Added

- Added new assertion option for totalAmount on the Mollie PaymentStatus screen
- Added Description and Merchant Name to the PaymentStatus screen
- Added more issuers to iDEAL and Voucher screens
- Added in3 and Giftcards to the PaymentList screen

## [1.1.0]

### Added

- Added new screens for iDEAL and KBC/CBC
- Added new getAmount() function in PaymentStatus screen.
- Added more payment selection actions to PaymentList screen.

### Changed

- Removed IssuerScreen and created separate iDEAL and KBC/CBC screen.
- Moved selectGiropay() from PaymentStatusScreen to PaymentListScreen.

## [1.0.0]

### Added

- Initial version of the Cypress Mollie Actions.
