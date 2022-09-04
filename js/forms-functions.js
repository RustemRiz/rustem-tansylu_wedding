const showGreetings = function() {
  const greetingsEl = document.getElementById('greetings');
  greetingsEl.classList.remove('transformed');
  setTimeout(() => {
    greetingsEl.classList.add('transformed');
  }, 2500);
}

const	onClickSubmit = function(isAttending) {
		const url = new URL('https://docs.google.com/forms/u/1/d/e/1FAIpQLSfBaEGf7rTF3KFRIsLUQNRWFqNfNR0yZnBLRklvLldtgBq6-w/formResponse?usp=pp_url&submit=Submit');
    const searchParams =  url.searchParams;

		const nameEl = document.getElementById('name');
    const name = nameEl?.value;
		const phoneEl = document.getElementById('phone');
		const phone = phoneEl?.value;
    const side = searchParams.get('side');
    if (!name || !phone) {
      nameEl.classList.add('show-error');
      phoneEl.classList.add('show-error');
      return;
    }

    searchParams.set('entry.761860465', name);
    searchParams.set('entry.1155097684', phone);
    if (side) searchParams.set('entry.1663727652', side);
    searchParams.set('entry.380884640', isAttending ? 'Да' : 'Нет');
    console.log(url);
    try {

      fetch(url)
        .then(() => {
          console.log('success')
        })
        .catch((e)=> {
        })
        .finally(() => {
          showGreetings();
        })
    } catch(error) {
      console.log(error);
    }
	};

