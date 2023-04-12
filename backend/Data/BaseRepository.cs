namespace MealMaster.Data;

public class BaseRepository<TEntity> where TEntity : class
{
    protected readonly MongoDbContext _mongoContext;
    protected IMongoCollection<TEntity> _dbCollection;

    public BaseRepository(MongoDbContext context)
    {
        _mongoContext = context;
        _dbCollection = _mongoContext.GetCollection<TEntity>(typeof(TEntity).Name);
    }

    public async Task InsertAsync(TEntity entity)
    {
        if (entity == null)
        {
            throw new ArgumentNullException(typeof(TEntity).Name + " object is null");
        }
        await _dbCollection.InsertOneAsync(entity);
    }

    public async Task DeleteAsync(string id)
    {
        var objectId = new ObjectId(id);
        await _dbCollection.DeleteOneAsync(Builders<TEntity>.Filter.Eq("_id", objectId));
    }

    public TEntity GetAsync(string id)
    {
        var objectId = new ObjectId(id);

        FilterDefinition<TEntity> filter = Builders<TEntity>.Filter.Eq("_id", objectId);

        return _dbCollection.FindAsync(filter).Result.FirstOrDefault();
    }

    public IEnumerable<TEntity> Get()
    {
        var all = _dbCollection.Find(Builders<TEntity>.Filter.Empty);
        return all.ToList();
    }

    public async Task UpdateAsync(TEntity entity)
    {
        await _dbCollection.ReplaceOneAsync(Builders<TEntity>.Filter.Eq("_id", entity), entity);
    }
}