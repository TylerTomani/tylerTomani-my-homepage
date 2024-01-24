document.addEventListener('DOMContentLoaded', function() {
    // Fetch the content.html file
    fetch('index-header.htm')
        .then(response => response.text())
        .then(html => {
            // Inject the retrieved HTML into the target div
            document.getElementById('targetDivContainer').innerHTML = html;
        })
        .catch(error => console.error('Error fetching content.html:', error));
});
