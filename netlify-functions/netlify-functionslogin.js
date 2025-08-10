const handler = async (event) => {
  const { email, password } = JSON.parse(event.body);

  // Burada kullanıcıyı doğrulayabilirsiniz
  // Örneğin, veritabanında eşleşen bir kullanıcı olup olmadığını kontrol edebilirsiniz

  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Giriş başarılı!' }),
  };
};

module.exports = { handler };
