const BOT_TOKEN = '';
const SERVER_ID = '1040945358114668594';

async function getUserRoles(userId) {
  const headers = {
    'Authorization': `Bot ${BOT_TOKEN}`,
    'Content-Type': 'application/json'
  };

  try {
    const res = await fetch(
      `https://discord.com/api/v10/guilds/${SERVER_ID}/members/${userId}`,
      { headers }
    );
    const member = await res.json();
    
    console.log('User:', member.user.username);
    console.log('Role IDs:', member.roles);
    
    const rolesRes = await fetch(
      `https://discord.com/api/v10/guilds/${SERVER_ID}/roles`,
      { headers }
    );
    const allRoles = await rolesRes.json();
    
    const userRoles = allRoles.filter(r => member.roles.includes(r.id));
    userRoles.forEach(role => {
        console.log('Role:', role.name);
        console.log('Role ID:', role.hoist);
    });
    
    return userRoles;

  } catch (error) {
    console.error('Error:', error);
  }
}

getUserRoles('886958797631926373');