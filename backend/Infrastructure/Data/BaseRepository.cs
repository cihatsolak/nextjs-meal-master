namespace MealMaster.Infrastructure.Data;

public class BaseRepository<TEntity> where TEntity : class
{
    protected readonly MongoDbContext _mongoContext;
    protected IMongoCollection<TEntity> _dbCollection;

    protected BaseRepository(MongoDbContext context)
    {
        _mongoContext = context;
        _dbCollection = _mongoContext.GetCollection<TEntity>(typeof(TEntity).Name);
    }

    public async Task Create(TEntity entity)
    {
        if (entity == null)
        {
            throw new ArgumentNullException(typeof(TEntity).Name + " object is null");
        }
        await _dbCollection.InsertOneAsync(entity);
    }

    public void Delete(string id)
    {
        var objectId = new ObjectId(id);
        _dbCollection.DeleteOneAsync(Builders<TEntity>.Filter.Eq("_id", objectId));
    }

    public TEntity Get(string id)
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

    public virtual void Update(TEntity obj)
    {
        _dbCollection.ReplaceOneAsync(Builders<TEntity>.Filter.Eq("_id", obj), obj);
    }
}