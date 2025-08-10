const handler = async (event) => {
  const { email, password } = JSON.parse(event.body);

  // Burada kullanıcıyı veritabanına kaydedebilirsiniz
  // Örneğin, MongoDB veya başka bir veritabanı kullanabilirsiniz

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Kullanıcı başarıyla kaydedildi!' }),
  };
};

module.exports = { handler };
