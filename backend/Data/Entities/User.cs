namespace MealMaster.Data.Entities
{
    public class User
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string Id { get; set; }

        [BsonRepresentation(BsonType.String)]
        public string Name { get; set; }

        [BsonRepresentation(BsonType.String)]
        public string Email { get; set; }

        [BsonRepresentation(BsonType.String)]
        public string PhoneNumber { get; set; }

        [BsonRepresentation(BsonType.String)]
        public string Address { get; set; }

        [BsonRepresentation(BsonType.String)]
        public string Job { get; set; }

        [BsonRepresentation(BsonType.String)]
        public string Bio { get; set; }

        [BsonRepresentation(BsonType.String)]
        public string Password { get; set; }

        [BsonRepresentation(BsonType.String)]
        public string ConfirmPassword { get; set; }

        [BsonRepresentation(BsonType.Boolean)]
        public bool IsEmailVerified { get; set; }

        [BsonRepresentation(BsonType.DateTime)]
        public DateTime CreatedDate { get; set; }
    }
}
