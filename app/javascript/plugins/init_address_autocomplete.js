import places from 'places.js';

const initAddressAutocomplete = () => {
  // Add autocomplete functionality to address input field
  // when creating/editing a Flat
  const addressInput = document.getElementById('flat_address');
  if (addressInput) {
    places({ container: addressInput });
  }
};

export { initAddressAutocomplete };