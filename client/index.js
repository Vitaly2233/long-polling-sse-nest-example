const subscribeLongPolling = async () => {
    const rawRes = await fetch('http://localhost:3000/long-polling', {
        method: 'GET',
    });
    const res = await rawRes.json();

    const doc = document.querySelector('#long-pooling-output');
    if (doc.innerHTML !== JSON.stringify(res))
        doc.innerHTML = JSON.stringify(res);

    setTimeout(subscribeLongPolling, 3000);
};

subscribeLongPolling().then(() => {});

const subscribeSSE = async () => {
    const eventSource = new EventSource('/sse');
    eventSource.onmessage = ({ data }) => {
        const parsedData = JSON.parse(data);
        console.log('parsed data', parsedData);
    };
};

subscribeSSE();
