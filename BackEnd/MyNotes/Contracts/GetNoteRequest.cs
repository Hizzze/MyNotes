namespace MyNotes.Contracts;

public record GetNoteRequest(string? Search, string? SortItem, string? SortOrder);