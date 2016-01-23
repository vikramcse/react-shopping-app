var API = module.exports = {
	fetchProducts: function() {
		return get('/api/product');
	}
};

function get(url) {
	return fetch(url, {
		credentials: 'same-origin'
	}).then(function (data) {
        return data.json();
    });
}

function post(url, body) {
    return fetch(url, {
        method: 'POST',
        credentials: 'include',
        body: JSON.stringify(body || {}),
        headers: {
            'Content-Type' : 'application/json',
            'Accept': 'application/json'
        }
    }).then(function (res) {
        return res.json();
    });
}
