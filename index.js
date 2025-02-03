let userid = document.getElementById('text');

async function fetchUser(id) {
    try {
        let response = await fetch(`https://api.github.com/users/${id}`);
        
        if (!response.ok) {
            throw new Error('User not found');
        }
        
        let result = await response.json();

        document.getElementById('userProfile').innerHTML = `
            <img src="${result.avatar_url}" alt="Profile Picture">
            <h3>${result.login}</h3>
            <p>Bio: ${result.bio || 'N/A'}</p>
            <div class="profile-info">
                <div>
                    <p><span>Followers:</span> ${result.followers}</p>
                    <p><span>Following:</span> ${result.following}</p>
                    <p><span>Repositories:</span> ${result.public_repos}</p>
                </div>
                <div>
                    <a href="${result.html_url}" target="_blank">Visit Profile</a>
                </div>
            </div>`;

        document.getElementById('userProfile').style.display = 'block';
    } catch (error) {
        document.getElementById('userProfile').innerHTML = `<h1>User ID is incorrect or user does not exist</h1>`;
        document.getElementById('userProfile').style.display = 'block';
    }
}

document.getElementById('btn').addEventListener('click', () => {
    let userID = userid.value; // GitHub username will be used
    fetchUser(userID);
});
