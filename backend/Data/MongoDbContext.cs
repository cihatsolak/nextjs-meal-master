namespace MealMaster.Data;

public class MongoDbContext
{
    private readonly IMongoDatabase _mongoDatabase;

    public MongoDbContext(IOptions<DatabaseSetting> configuration)
    {
        var mongoClient = new MongoClient(configuration.Value.ConnectionString);
        _mongoDatabase = mongoClient.GetDatabase(configuration.Value.DatabaseName);
    }

    public IMongoCollection<TEntity> GetCollection<TEntity>(string name)
    {
        return _mongoDatabase.GetCollection<TEntity>(name);
    }
}
