const diamondData = [
    { item: '25 Diamond', price: '22.0' },
    { item: '50 Diamond', price: '38.0' },
    { item: '115 Diamond', price: '83.0' },
    { item: '240 Diamond', price: '166.0' },
    { item: '355 Diamond', price: '249.0' },
    { item: '505 Diamond', price: '354.0' },
    { item: '610 Diamond', price: '420.0' },
    { item: '850 Diamond', price: '586.0' },
    { item: '1090 Diamond', price: '752.0' },
    { item: '1240 Diamond', price: '840.0' },
    { item: '2530 Diamond', price: '1680.0' },
    { item: '5060 Diamond', price: '3360.0' },
    { item: '10120 Diamond', price: '6720.0' },
    { item: '1x Weekly', price: '165.0' },
    { item: '2x Weekly', price: '330.0' },
    { item: '3x Weekly', price: '495.0' },
    { item: '5x Weekly', price: '825.0' },
    { item: '1x Monthly', price: '820.0' },
    { item: '2x Monthly', price: '1640.0' },
    { item: '1x Weekly + 1x Monthly', price: '985.0' },
    { item: '4x Weekly + 1x Monthly', price: '1480.0' },
    { item: '5x Weekly + 1x Monthly', price: '1645.0' },
    { item: '1x Weekly Lite', price: '45.0' },
    { item: 'Level Up Pass (Full)', price: '448.0' },
    { item: 'Evo 30 Day Pack', price: '355.0' }
];

const tableBody = document.getElementById('priceTable');

diamondData.forEach(data => {
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>☞ ${data.item}</td>
        <td style="font-weight: 700; color: #fff;">${data.price} Tk</td>
        <td><span style="color: #00ff88; background: rgba(0,255,136,0.1); padding: 4px 10px; border-radius: 4px; font-size: 0.8rem;">Available</span></td>
    `;
    tableBody.appendChild(row);
});
