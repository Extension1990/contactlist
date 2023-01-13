using ContactListApi.Data;

var builder = WebApplication.CreateBuilder(args);
builder.Services.Configure<ContactsDatabaseSettings>(builder.Configuration.GetSection("ContactsDatabaseSettings"));
builder.Services.AddSingleton<ContactsService>();
builder.Services.AddCors(p => p.AddPolicy("corsapp", builder =>
{
    builder.WithOrigins("*").AllowAnyMethod().AllowAnyHeader();
}));

var app = builder.Build();

app.UseCors(options => options.WithOrigins("*").AllowAnyMethod().AllowAnyHeader());

// Default route
app.MapGet("/", () => "Manage Contacts API!");

// Insert/create contact
app.MapPost("/api/contacts", async (ContactsService contactService, Contact contact) =>
{
    await contactService.Create(contact);
    return Results.Ok(contact);
});

// Get all contacts
app.MapGet("/api/contacts", async (ContactsService contactService) => await contactService.Get());

// Get contact by ID
app.MapGet("/api/contacts/{id}", async (ContactsService contactService, string id) =>
{
    var contact = await contactService.Get(id);
    return contact is null ? Results.NotFound() : Results.Ok(contact);
});

// Update contact by ID
app.MapPut("/api/contacts/{id}", async (ContactsService contactService, string id, Contact updateContact) =>
{
    var contact = await contactService.Get(id);
    if (contact is null) return Results.NotFound();

    updateContact.Id = contact.Id;
    await contactService.Update(id, updateContact);

    return Results.Ok(updateContact.Name + "'s details have been updated successfully!");
});

// Delete/Remove contact by ID
app.MapDelete("/api/contacts/{id}", async (ContactsService contactService, string id) =>
{
    var contact = await contactService.Get(id);
    if (contact is null) return Results.NotFound();

    await contactService.Remove(contact.Id);
    return Results.Ok(contact);
});

app.Run();

