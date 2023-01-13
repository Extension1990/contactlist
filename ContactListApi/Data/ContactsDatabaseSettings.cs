using System;
namespace ContactListApi.Data
{
	public class ContactsDatabaseSettings
	{
		public string ConnectionString { get; set; } = string.Empty;
		public string DatabaseName { get; set; } = string.Empty;
		public string ContactsCollectionName { get; set; } = string.Empty;
	}
}
