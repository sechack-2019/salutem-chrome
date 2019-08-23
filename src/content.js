chrome.extension.onMessage.addListener(function() {
    hide();
});

function hide(){
    const product = [...document.getElementsByClassName('sg-col-inner')].slice(4);

    product.forEach((value, index) => {
        if (index % 7 == 0) {
            const title = value.querySelectorAll('a')[1].querySelector('span').innerText;

            fetch('https://salutem-api.herokuapp.com/api/v1/post', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    text: title
                })
            })
            .then(res => res.json())
            .then(res => {
                if (res.result.id === 1) {
                    // value.className = 'suspicious';

                    fetch('https://salutem-api.herokuapp.com/api/v1/lint', {
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json',
                        },
                        body: JSON.stringify({
                            text: '今日わいい天気です\n' // ここに対象の文字列
                        })
                    })
                    .then(res => res.json())
                    .then(res => {
                        value.className = 'suspicious';
                    });

                }
            });
        }
    });
};

