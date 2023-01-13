using Microsoft.Extensions.Options;
using MongoDB.Driver;

namespace ContactListApi.Data
{
	public class ContactsService
	{
		private readonly IMongoCollection<Contact> _contacts;

		public ContactsService(IOptions<ContactsDatabaseSettings> options)
		{
            var mongoClient = new MongoClient(options.Value.ConnectionString);

			_contacts = mongoClient.GetDatabase(options.Value.DatabaseName)
				.GetCollection<Contact>(options.Value.ContactsCollectionName);
		}

		public async Task<List<Contact>> Get() =>
			await _contacts.Find(_ => true).ToListAsync();

		public async Task<Contact> Get(string id) =>
			await _contacts.Find(contact => contact.Id == id).FirstOrDefaultAsync();

		public async Task Create(Contact newContact) =>
			await _contacts.InsertOneAsync(newContact);

		public async Task Update(string id, Contact updateContact) =>
			await _contacts.ReplaceOneAsync(contact => contact.Id == id, updateContact);

		public async Task Remove(string id) =>
			await _contacts.DeleteOneAsync(contact => contact.Id == id);

	}
}

