export default async function handler(req, res) {
  const token = process.env.GITHUB_TOKEN;
  const response = await fetch('https://api.github.com/repos/h4MeMengoding/meriros-link/commits', {
    headers: {
      'Authorization': `token ${token}` // Tambahkan header dengan token
    }
  });

  if (!response.ok) {
    return res.status(500).json({ error: 'Failed to fetch commits' });
  }

  const commits = await response.json();
  const lastCommit = commits[0];

  const date = new Date(lastCommit.commit.author.date);
  const commitMessage = lastCommit.commit.message;
  const formattedDate = new Intl.DateTimeFormat('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    hour12: false,
  }).format(date);

  const timeAgo = (date) => {
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);
    const diffInMonths = Math.floor(diffInDays / 30);
    const diffInYears = Math.floor(diffInDays / 365);

    if (diffInYears > 0) {
      return `${diffInYears} tahun yang lalu`;
    } else if (diffInMonths > 0) {
      return `${diffInMonths} bulan yang lalu`;
    } else if (diffInDays > 0) {
      return `${diffInDays} hari yang lalu`;
    } else if (diffInHours > 0) {
      return `${diffInHours} jam yang lalu`;
    } else if (diffInMinutes > 0) {
      return `${diffInMinutes} menit yang lalu`;
    } else {
      return `${diffInSeconds} detik yang lalu`;
    }
  };

  const timeDifference = timeAgo(date);

  // Gabungkan semua informasi dengan enter
  const lastUpdatedInfo = `${formattedDate} (${timeDifference})\nPembaruan: "${commitMessage}"`;

  return res.status(200).json({
    lastUpdated: lastUpdatedInfo,
  });
}