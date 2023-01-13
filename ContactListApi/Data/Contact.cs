using MongoDB.Bson.Serialization.Attributes;

namespace ContactListApi.Data
{
	public class Contact
	{
		[BsonId]
		[BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
		public string Id { get; set; }
		public string Name { get; set; }
		public string Email { get; set; }
		public string Phone { get; set; }
		public string Company { get; set; }
		public string Notes { get; set; }
	}
}

