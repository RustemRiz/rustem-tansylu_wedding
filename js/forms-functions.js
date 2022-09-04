
const	onClickSubmit = function(isAttending) {
    console.log(isAttending);
		const url = new URL('https://docs.google.com/forms/u/1/d/e/1FAIpQLSfBaEGf7rTF3KFRIsLUQNRWFqNfNR0yZnBLRklvLldtgBq6-w/formResponse?usp=pp_url&submit=Submit');
    const searchParams =  url.searchParams;

		const name = document.getElementById('name')?.value;
		const phone = document.getElementById('phone')?.value;
    const side = searchParams.get('side');
    if (!name || !phone) return;

    searchParams.set('entry.761860465', name);
    searchParams.set('entry.1155097684', phone);
    if (side) searchParams.set('entry.1663727652', side);
    searchParams.set('entry.380884640', isAttending ? 'Да' : 'Нет');
    console.log(url);
		fetch(url, {headers: {origin: '*'}})
      .then(() => {
        console.log('success')
      })
      .catch((e)=> {
        console.log('error')
        console.log(Object.keys(e))
        console.log(e)
      });
	};

  const onSubmit = function(e) {
    // e.preventDefault();
    // return false;
  }
